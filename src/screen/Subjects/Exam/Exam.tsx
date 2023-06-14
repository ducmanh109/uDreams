import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import FastImage from 'react-native-fast-image';
import {MathJaxSvg} from 'react-native-mathjax-html-to-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header/Header';
import ROUTES from '../../../constants/routes';
import {myDatabase, stopListenData} from '../../../data/database';
import {questionStore} from '../../../data/question/quetion.store';
import {navigateTo} from '../../../navigator/actions';
import colors from '../../../utils/colors';
import CommonFonts from '../../../utils/CommonFonts';
import CommonStyles from '../../../utils/CommonStyles';
import {styles} from './styles';
import Toast from 'react-native-toast-message';
import {subjectStore} from '../../../data/question/subject.store';

const Exam = ({route}) => {
  const {subjectID} = route.params;
  const {examIndex} = route.params;
  const {numberOfQuestion} = route.params;
  const {timeTodo} = route.params;
  //store
  const saveUserAnswer = questionStore(state => state.setAns);
  const listAnswer = questionStore(state => state.listAnswer);
  const increaseCompletedExam = questionStore(
    state => state.increaseCompletedExam,
  );
  const clearStore = questionStore(state => state.clearStore);
  const completeSubjectFunc = subjectStore(state => state.completeSubjectFunc);
  const increaseIgnoreRate = questionStore(state => state.increaseIgnoreRate);
  const increaseCorrectRate = questionStore(state => state.increaseCorrectRate);
  const increaseWrongRate = questionStore(state => state.increaseWrongRate);
  const wrongSubjecFunc = subjectStore(state => state.wrongSubjecFunc);
  const correctSubjectFunc = subjectStore(state => state.correctSubjectFunc);
  const ignoreSubjectFunc = subjectStore(state => state.ignoreSubjectFunc);
  const setExamData = subjectStore(state => state.setExamData);
  //state
  const [data, setData] = useState([]);
  const [ansData, setAnsData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [checkResult, setCheckResult] = useState(false);
  const [correctOption, setCorrectOption] = useState('');
  const resultData = [{}];
  //firebase
  useEffect(() => {
    myDatabase
      .ref(`${subjectID}/${examIndex}/questions/`)
      .once('value')
      .then(snapshot => {
        setData(snapshot.val());
        setExamData(snapshot.val());
      });
    return stopListenData;
  }, [examIndex, questionIndex, setExamData, subjectID]);

  useEffect(() => {
    myDatabase
      .ref(`${subjectID}/${examIndex}/questions/${questionIndex}/answers`)
      .once('value')
      .then(snapshot => {
        setAnsData(snapshot.val());
      });
    return stopListenData;
  }, [examIndex, questionIndex, subjectID]);
  //

  //handleNexBack
  const handleNext = useCallback(() => {
    if (questionIndex === numberOfQuestion - 1) {
      return;
    }
    setQuestionIndex(value => value + 1);
  }, [numberOfQuestion, questionIndex]);
  const handleBack = () => {
    if (questionIndex === 0) {
      return;
    }
    setQuestionIndex(value => value - 1);
  };
  //

  const onPressOption = useCallback(
    (questionKey: any, answerKey: any, option: any) => {
      ToastAndroid.show('Đáp án đã chọn ' + `${option}`, ToastAndroid.SHORT);
      saveUserAnswer(questionKey, answerKey);
      handleNext();
    },
    [handleNext, saveUserAnswer],
  );

  const confirmComplete = useCallback(() => {
    increaseCompletedExam();
    completeSubjectFunc();
    navigateTo(ROUTES.RESULT, {
      setQuestionIndex,
      setCheckResult,
    });
    data.map((question: any) => {
      if (!listAnswer?.[question.key]) {
        increaseIgnoreRate();
        ignoreSubjectFunc();
      } else if (
        listAnswer?.[question.key]?.answerKey === question.correctAnswer
      ) {
        increaseCorrectRate();
        correctSubjectFunc();
      } else {
        increaseWrongRate();
        wrongSubjecFunc();
      }
    });
  }, [
    completeSubjectFunc,
    correctSubjectFunc,
    data,
    ignoreSubjectFunc,
    increaseCompletedExam,
    increaseCorrectRate,
    increaseIgnoreRate,
    increaseWrongRate,
    listAnswer,
    wrongSubjecFunc,
  ]);
  const completeExam = () => {
    Alert.alert('Nộp bài', 'Kết thúc đề thi?', [
      {
        text: 'Huỷ',
        style: 'destructive',
      },
      {
        text: 'Xác nhận',
        onPress: () => confirmComplete(),
      },
    ]);
  };
  //renderItem
  const renderItem = useCallback(
    ({item}) => {
      return (
        <Pressable
          style={({pressed}) =>
            pressed ? styles.wrapAnswer1 : styles.wrapAnswer
          }
          onPress={() =>
            onPressOption(data[questionIndex].key, item.key, item.option)
          }>
          <View style={styles.wrapOption}>
            <Text style={styles.option}>{item.option}</Text>
          </View>
          <View style={styles.wrapContent}>
            <MathJaxSvg fontSize={CommonFonts.res16}>{item.title}</MathJaxSvg>
          </View>
        </Pressable>
      );
    },
    [data, onPressOption, questionIndex],
  );
  const getCorrectOption = () => {
    if (data?.[questionIndex]?.correctAnswer === '001') {
      setCorrectOption('A');
    } else if (data?.[questionIndex]?.correctAnswer === '002') {
      setCorrectOption('B');
    } else if (data?.[questionIndex]?.correctAnswer === '003') {
      setCorrectOption('C');
    } else if (data?.[questionIndex]?.correctAnswer === '004') {
      setCorrectOption('D');
    }
  };
  const keyExtractor = useCallback((item: any) => item.key, []);
  const renderResultItem = () =>
    ansData.map((answer: any) => {
      return (
        <Pressable style={styles.wrapAnswer} disabled={true}>
          <View style={styles.wrapOption}>
            <Text style={styles.option}>{answer.option}</Text>
          </View>
          <View
            style={[
              styles.wrapContent,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                backgroundColor: !listAnswer?.[data[questionIndex].key]
                  ? colors.White
                  : answer.key === data[questionIndex].correctAnswer
                  ? colors.Green
                  : answer.key ===
                    listAnswer?.[data[questionIndex].key].answerKey
                  ? colors.error
                  : colors.White,
                borderRadius: 20,
              },
            ]}>
            <MathJaxSvg fontSize={CommonFonts.res16}>{answer.title}</MathJaxSvg>
          </View>
        </Pressable>
      );
    });
  const ListFooterComponent = () => {
    getCorrectOption();
    return (
      <View>
        <View>
          <Text style={styles.quesTitle}>Lời giải</Text>
        </View>
        <Text>Đáp án đúng {correctOption}</Text>
        {data?.[questionIndex]?.resultImage ? (
          <FastImage
            style={styles.resultImage}
            source={{
              uri: data[questionIndex].resultImage,
            }}
          />
        ) : (
          <Text>Chưa có lời giảỉ</Text>
        )}
      </View>
    );
  };

  const onTimeout = useCallback(() => {
    Toast.show({
      text1: 'Hết giờ',
      text2: 'Đang tổng hợp kết quả cho bạn',
    });
    setTimeout(() => {
      confirmComplete();
    }, 2000);
  }, [confirmComplete]);

  const backToHome = () => {
    navigateTo(ROUTES.HOME), clearStore();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={checkResult ? 'Đáp án' : ''}
        showBackButton={checkResult ? false : true}
        isDoingExam={checkResult ? false : true}
      />
      <View style={CommonStyles.flex1}>
        {checkResult ? (
          <View style={styles.wrapHeaderResult}>
            <View style={styles.wrapBackHome}>
              <Ionicons name="chevron-back" size={24} />
              <Text onPress={backToHome}>Trang chủ</Text>
            </View>
            <View style={styles.wrapBackHome}>
              <Text
                onPress={() =>
                  navigateTo(ROUTES.RESULT, {
                    item: data,
                    setQuestionIndex,
                    setCheckResult,
                  })
                }>
                Kết quả
              </Text>
              <Ionicons name="chevron-forward" size={24} />
            </View>
          </View>
        ) : (
          //header
          <View style={styles.header}>
            <Text>
              {questionIndex + 1} / {numberOfQuestion}
            </Text>
            <CountDown
              until={60 * timeTodo}
              size={16}
              digitStyle={styles.digitStyle}
              timeToShow={['H', 'M', 'S']}
              timeLabels={{m: null, s: null}}
              showSeparator={true}
              onFinish={onTimeout}
            />
            <Button
              text="Nộp bài"
              style={styles.btnSubmit}
              textStyle={styles.txtSubmit}
              onPress={completeExam}
            />
          </View>
        )}
        <ScrollView
          style={styles.wrapQuestion}
          showsVerticalScrollIndicator={false}>
          {data.length > 0 && (
            <View>
              <Text style={styles.quesTitle}>Câu {questionIndex + 1}</Text>
              <MathJaxSvg fontSize={CommonFonts.res18}>
                {data[questionIndex].title}
              </MathJaxSvg>
            </View>
          )}
        </ScrollView>
        {data?.[questionIndex]?.imageQuestion && (
          <FastImage
            source={{uri: data[questionIndex]?.imageQuestion}}
            style={styles.imageQuestion}
          />
        )}
        {checkResult ? (
          <FlatList
            data={resultData}
            renderItem={renderResultItem}
            keyExtractor={keyExtractor}
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={ListFooterComponent}
          />
        ) : (
          <FlatList
            data={ansData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listAnswer}
          />
        )}
      </View>

      <View style={styles.wrapButton}>
        <TouchableWithoutFeedback
          onPress={handleBack}
          disabled={questionIndex === 0 ? true : false}>
          <FontAwesome name="chevron-circle-left" size={50} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={handleNext}
          disabled={questionIndex === numberOfQuestion - 1 ? true : false}>
          <FontAwesome name="chevron-circle-right" size={50} />
        </TouchableWithoutFeedback>
      </View>
      <Toast />
    </SafeAreaView>
  );
};

export default memo(Exam);
function isSelectionModeEnabled() {
  throw new Error('Function not implemented.');
}

function disableSelectionMode() {
  throw new Error('Function not implemented.');
}
