import React, {useCallback, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../../components/Header/Header';
import AnalyticChart from '../../components/Modals/AnalyticChart';
import {questionStore} from '../../data/question/quetion.store';
import colors from '../../utils/colors';
import CommonStyles from '../../utils/CommonStyles';
import useHomeLogic from '../Home/Home.logic';
import {styles} from './styles';

const Analytics = () => {
  const {search, searchList, searchSubject} = useHomeLogic();

  const [modalVisible, setModalVisible] = useState(false);
  const getSubject = questionStore(state => state.getSubject);

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = useCallback(
    (subjectName: string) => {
      getSubject(subjectName);
      setModalVisible(true);
    },
    [getSubject],
  );

  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableWithoutFeedback onPress={() => openModal(item.id)}>
          <View style={styles.wrapSubjectItem}>
            <FastImage source={{uri: item.url}} style={styles.image} />
            <Text style={styles.subjectItem}>{item.subject}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    },
    [openModal],
  );
  const keyExtractor = useCallback(item => item.id, []);

  return (
    <SafeAreaView style={CommonStyles.container}>
      <Header headerTitle="Báo cáo học tập" showBackButton={true} />
      <View style={styles.wrapTxtInputIcon}>
        <SimpleLineIcons name="magnifier" size={24} color={colors.Black} />
        <TextInput
          style={styles.txtInput}
          placeholder="Tìm kiếm môn học"
          placeholderTextColor={colors.Black}
          clearButtonMode={'while-editing'}
          value={search}
          onChangeText={value => searchSubject(value)}
        />
      </View>
      <FlatList
        data={searchList}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.list}
      />
      <AnalyticChart modalVisible={modalVisible} closeModal={closeModal} />
    </SafeAreaView>
  );
};

export default Analytics;
