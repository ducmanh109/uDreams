import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import ROUTES from '../../../constants/routes';
import {myDatabase, stopListenData} from '../../../data/database';
import {profileStore} from '../../../data/profile/profile.store';
import {navigateTo} from '../../../navigator/actions';
import colors from '../../../utils/colors';
import useHomeLogic from '../Home.logic';

const Content = () => {
  const {analyticData} = useHomeLogic();

  return (
    <View style={styles.resultContainer}>
      <View style={styles.wrapResult}>
        <TouchableWithoutFeedback onPress={() => navigateTo(ROUTES.ANALYTICS)}>
          <View style={styles.resultBox}>
            <Text style={styles.correctRate}>
              {!analyticData ? 0 : analyticData.correct} câu
            </Text>
            <Text style={styles.titleResult}>Trả lời đúng</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigateTo(ROUTES.ANALYTICS)}>
          <View style={styles.resultBox}>
            <Text style={styles.ignoreRate}>
              {!analyticData ? 0 : analyticData.wrong} câu
            </Text>
            <Text style={styles.titleResult}>Trả lời sai</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.wrapResult}>
        <TouchableWithoutFeedback onPress={() => navigateTo(ROUTES.ANALYTICS)}>
          <View style={styles.resultBox}>
            <Text style={styles.doneExercise}>
              {!analyticData ? 0 : analyticData.complete} đề
            </Text>
            <Text style={styles.titleResult}>Đề hoàn thành</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigateTo(ROUTES.ANALYTICS)}>
          <View style={styles.resultBox}>
            <Text style={styles.learnTime}>
              {!analyticData ? 0 : analyticData.ignore} câu
            </Text>
            <Text style={styles.titleResult}>Bỏ qua</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
export default Content;

const styles = StyleSheet.create({
  resultContainer: {
    marginHorizontal: 8,
    height: 186,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapResult: {
    justifyContent: 'space-between',
  },
  resultBox: {
    width: 170,
    height: 85,
    backgroundColor: colors.White,
    borderRadius: 10,
  },
  correctRate: {
    color: colors.Green,
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 20,
    marginTop: 18,
  },
  titleResult: {
    color: colors.neutual,
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 22,
    marginTop: 4,
    marginLeft: 20,
  },
  ignoreRate: {
    color: colors.warning,
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 20,
    marginTop: 18,
  },
  doneExercise: {
    color: colors.blackColor,
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 20,
    marginTop: 18,
  },
  learnTime: {
    color: colors.warning500,
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 20,
    marginTop: 18,
  },
});
