import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import ROUTES from '../../constants/routes';
import {myDatabase} from '../../data/database';
import {profileStore} from '../../data/profile/profile.store';
import {questionStore} from '../../data/question/quetion.store';
import {subjectStore} from '../../data/question/subject.store';
import {goBack, navigateTo} from '../../navigator/actions';
import colors from '../../utils/colors';
import CommonFonts from '../../utils/CommonFonts';
import CommonHeights from '../../utils/CommonHeights';
import CommonWidths from '../../utils/CommonWidths';

const Result = ({route}) => {
  const examData = subjectStore(state => state.examData);
  const {setQuestionIndex} = route.params;
  const {setCheckResult} = route.params;
  const userInfo = profileStore(state => state.userInfo);
  const listAnswer = questionStore(state => state.listAnswer);
  const subject = questionStore(state => state.subject);
  const clearStore = questionStore(state => state.clearStore);
  //commonValue
  const completedExam = questionStore(state => state.completedExam);
  const ignoreRate = questionStore(state => state.ignoreRate);
  const correctRate = questionStore(state => state.correctRate);
  const wrongRate = questionStore(state => state.wrongRate);
  //eachSubject
  const completeSubject = subjectStore(state => state.completeSubject);
  const ignoreSubject = subjectStore(state => state.ignoreSubject);
  const correctSubject = subjectStore(state => state.correctSubject);
  const wrongSubject = subjectStore(state => state.wrongSubject);

  useEffect(() => {
    myDatabase.ref(`Analytics/${userInfo?.displayName}/${subject}`).update({
      complete: completeSubject,
      ignore: ignoreSubject,
      correct: correctSubject,
      wrong: wrongSubject,
    });
    myDatabase.ref(`Analytics/${userInfo?.displayName}/CommonValue`).update({
      complete: completedExam,
      ignore: ignoreRate,
      correct: correctRate,
      wrong: wrongRate,
    });
  }, [
    completeSubject,
    completedExam,
    correctRate,
    correctSubject,
    ignoreRate,
    ignoreSubject,
    subject,
    userInfo?.displayName,
    wrongRate,
    wrongSubject,
  ]);

  const backToHome = () => {
    navigateTo(ROUTES.HOME);
    clearStore();
  };

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <Pressable
          onPress={() => {
            goBack();
            setQuestionIndex(index);
            setCheckResult(true);
          }}>
          <View style={styles.wrapResult}>
            <Text style={{marginTop: 8}}>Câu {item.id}</Text>
            {!listAnswer?.[item.key] ? (
              <Ionicons name="md-remove-circle" size={24} />
            ) : listAnswer?.[item.key]?.answerKey === item.correctAnswer ? (
              <Ionicons
                name="checkmark-circle"
                size={24}
                color={colors.Green}
              />
            ) : (
              <Ionicons name="close-circle" size={24} color={colors.Red} />
            )}
          </View>
        </Pressable>
      );
    },
    [listAnswer, setCheckResult, setQuestionIndex],
  );
  const keyExtractor = useCallback((item: any) => item.id, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle="Kết quả" />
      <View style={{height: 470}}>
        <FlatList
          key={1}
          data={examData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={5}
          showsVerticalScrollIndicator={false}
          style={{alignSelf: 'center'}}
          contentContainerStyle={styles.list}
        />
      </View>
      <Button
        text="Trở về trang chủ"
        color={colors.activeButton}
        style={styles.btn}
        textStyle={styles.txtBtn}
        onPress={backToHome}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  wrapResult: {
    width: 60,
    height: 60,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  list: {
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  btn: {
    marginTop: 100,
    marginBottom: CommonHeights.res300,
    width: CommonWidths.res200,
    height: CommonHeights.res100,
    alignSelf: 'center',
    borderRadius: 30,
  },
  txtBtn: {
    fontSize: CommonFonts.res18,
    color: colors.White,
  },
});
export default Result;
