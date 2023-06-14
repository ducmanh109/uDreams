import React, {memo, useCallback} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import FastImage from 'react-native-fast-image';
import ROUTES from '../../../constants/routes';
import {questionStore} from '../../../data/question/quetion.store';
import {navigateTo} from '../../../navigator/actions';
import colors from '../../../utils/colors';

const SubjectItem = ({item}) => {
  const getSubject = questionStore(state => state.getSubject);
  const navigateToSubject = useCallback(() => {
    navigateTo(ROUTES.SUBJECT, {subjectID: item.id, subjectName: item.subject});
    getSubject(item.id);
  }, [getSubject, item.id, item.subject]);

  return (
    <TouchableWithoutFeedback onPress={navigateToSubject}>
      <View style={styles.wrapItem}>
        <FastImage
          source={{uri: item?.url}}
          resizeMode="contain"
          style={styles.icon}
        />
        <Text style={styles.subject}>{item.subject}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(SubjectItem);

const styles = StyleSheet.create({
  wrapItem: {
    flex: 1,
    height: 88,
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    height: 70,
    width: 70,
  },
  subject: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '500',
    color: colors.blackColor,
  },
});
