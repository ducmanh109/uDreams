import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';
import {modalProps} from '.';
import {myDatabase} from '../../data/database';
import {profileStore} from '../../data/profile/profile.store';
import {questionStore} from '../../data/question/quetion.store';
import colors from '../../utils/colors';
import CommonHeights from '../../utils/CommonHeights';
import CommonWidths from '../../utils/CommonWidths';

const AnalyticChart: React.FC<modalProps> = ({modalVisible, closeModal}) => {
  const subject = questionStore(state => state.subject);
  const userInfo = profileStore(state => state.userInfo);

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    myDatabase
      .ref(`Analytics/${userInfo?.displayName}/${subject}`)
      .once('value')
      .then(snapshot => {
        if (!snapshot.exists()) {
          setData(null);
        }
        setData(snapshot.val());
      });
  }, [subject, userInfo?.displayName]);

  var chartData = [];
  if (!data) {
    chartData === null;
  } else {
    chartData = [
      {xAxis: 'Hoàn thành', yAxis: data.complete},
      {xAxis: 'Đúng', yAxis: data.correct},
      {xAxis: 'Sai', yAxis: data.wrong},
      {xAxis: 'Bỏ qua', yAxis: data.ignore},
    ];
  }
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={closeModal}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}>
      <View style={styles.container}>
        <FontAwesome
          name="close"
          size={30}
          style={styles.closeIcon}
          onPress={closeModal}
        />
        {chartData.length === 0 ? (
          <Text style={styles.txtNodata}>Không có dữ liệu</Text>
        ) : (
          <VictoryChart width={350} theme={VictoryTheme.material}>
            <Text style={styles.txtNodata}>{subject}</Text>
            <VictoryBar
              data={chartData}
              x="xAxis"
              y="yAxis"
              barWidth={25}
              barRatio={1}
              style={{data: {fill: colors.Green}}}
              alignment={'start'}
            />
          </VictoryChart>
        )}
      </View>
    </Modal>
  );
};

export default AnalyticChart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    minHeight: CommonHeights.res300,
    borderRadius: 30,
  },
  closeIcon: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: CommonWidths.p80,
  },
  txtNodata: {
    textAlign: 'center',
  },
});
