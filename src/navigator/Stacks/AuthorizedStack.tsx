import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ROUTES from '../../constants/routes';
import MainTab from '../BottomTab';
import ReportIssue from '../../screen/ReportIssues/ReportIssues';
import Result from '../../screen/Result/Result';
import Literature from '../../screen/Subjects/Literature/Literature';
import Subject from '../../screen/Subjects/Subjects/Subject';
import Analytics from '../../screen/Analytics/Analytics';
import Exam from '../../screen/Subjects/Exam/Exam';
import {useFocusEffect} from '@react-navigation/native';
import {BackHandler} from 'react-native';

const Stack = createNativeStackNavigator();
const AuthorizedStack = () => {
  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', () => true);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', () => false);
    }, []),
  );
  const screenOptions = useMemo(() => ({headerShown: false}), []);
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.MAIN_TAB} component={MainTab} />
      <Stack.Screen name={ROUTES.REPORT_ISSUE} component={ReportIssue} />
      <Stack.Screen name={ROUTES.SUBJECT} component={Subject} />
      <Stack.Screen name={ROUTES.EXAM} component={Exam} />
      <Stack.Screen name={ROUTES.RESULT} component={Result} />
      <Stack.Screen name={ROUTES.LITERATURE} component={Literature} />
      <Stack.Screen name={ROUTES.ANALYTICS} component={Analytics} />
    </Stack.Navigator>
  );
};
export default AuthorizedStack;
