import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CountDown from 'react-native-countdown-component';
import Pdf from 'react-native-pdf';
import Header from '../../../components/Header/Header';
import CommonStyles from '../../../utils/CommonStyles';
import {styles} from './styles';

const Literature = ({route}) => {
  const {examTitle} = route.params;
  const {examImage} = route.params;
  const {resultImage} = route.params;
  const [showResult, setShowResult] = useState(false);
  const [count, setCount] = useState(false);
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Header headerTitle="Đề thi môn Ngữ văn" showBackButton={true} />
      <CountDown
        until={60 * 120}
        size={16}
        digitStyle={styles.digitStyle}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator={true}
        running={count}
      />
      <View style={styles.wrapCount}>
        <Text style={styles.txtCount} onPress={() => setCount(true)}>
          Bấm giờ
        </Text>
      </View>

      <View style={styles.scrollView}>
        <View style={styles.wrapTitle}>
          <Text style={styles.examTitle} onPress={() => setShowResult(false)}>
            {examTitle}
          </Text>
          <Text onPress={() => setShowResult(true)} style={styles.examTitle}>
            Đáp án gợi ý
          </Text>
        </View>

        <Pdf
          source={{
            uri: !showResult ? examImage : resultImage,
          }}
          style={styles.pdf}
        />
      </View>
    </SafeAreaView>
  );
};

export default Literature;
