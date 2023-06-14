import React, {memo, useCallback} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {goBack} from '../../navigator/actions';
import CommonHeights from '../../utils/CommonHeights';
import CommonWidths from '../../utils/CommonWidths';

interface PropTypes {
  headerTitle: string;
  isDoingExam?: Boolean;
  showBackButton?: Boolean;
}

const Header: React.FC<PropTypes> = ({
  headerTitle,
  isDoingExam,
  showBackButton,
}) => {
  const backToPreviousScreen = useCallback(() => {
    if (isDoingExam) {
      Alert.alert(
        'Kết thúc bài thi',
        'Bạn có muốn kết thúc bài thi này không?',
        [
          {
            text: 'Thoát',
            style: 'destructive',
            onPress: goBack,
          },
          {
            text: 'Tiếp tục',
          },
        ],
      );
      return;
    }
    goBack();
  }, [isDoingExam]);

  return (
    <View style={styles.wrapHeader}>
      <View style={styles.wrapIcon}>
        {showBackButton ? (
          <Ionicons
            name="chevron-back"
            size={24}
            onPress={backToPreviousScreen}
          />
        ) : (
          <Text />
        )}
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>{headerTitle}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapHeader: {
    flexDirection: 'row',
    height: CommonHeights.res56,
    alignItems: 'center',
  },
  wrapIcon: {
    justifyContent: 'flex-start',
    zIndex: 2,
    marginLeft: CommonWidths.res8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  viewTitle: {
    position: 'absolute',
    width: '100%',
  },
});
export default memo(Header);
