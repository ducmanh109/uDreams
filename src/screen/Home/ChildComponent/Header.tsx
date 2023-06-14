import React, {memo} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {profileStore} from '../../../data/profile/profile.store';
import colors from '../../../utils/colors';
import differenceInDays from 'date-fns/differenceInDays';
import CommonHeights from '../../../utils/CommonHeights';
import CommonWidths from '../../../utils/CommonWidths';
import Toast from 'react-native-toast-message';

const Header = () => {
  var year = new Date().getFullYear();
  var month = new Date().getMonth() + 1;
  var date = new Date().getDate();
  const distanceDate = differenceInDays(
    new Date(2022, 7, 7),
    new Date(year, month, date),
  );
  const userInfo = profileStore(state => state.userInfo);

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Cố lên nhé!',
      text2: `Còn ${distanceDate} ngày cho kì thi nữa thôi 👋`,
      visibilityTime: 2500,
      topOffset: 20,
    });
  };
  return (
    <View style={styles.wrapHeader}>
      <View>
        <Text style={styles.title}>Hi, {userInfo?.username}</Text>
        <Text style={styles.title2}>Chúc bạn ôn thi hiệu quả!</Text>
      </View>
      <TouchableWithoutFeedback onPress={showToast}>
        <View style={styles.wrapDate}>
          <Text style={styles.date}>{distanceDate + '\n'} ngày</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  wrapHeader: {
    top: 20,
    marginHorizontal: 8,
    marginLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: colors.blackColor,
  },
  title2: {
    top: 4,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
    fontStyle: 'normal',
  },
  wrapDate: {
    backgroundColor: colors.GreenTick,
    borderRadius: 60,
    width: CommonWidths.res60,
    height: CommonHeights.res70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    textAlign: 'center',
    fontWeight: '700',
  },
});
