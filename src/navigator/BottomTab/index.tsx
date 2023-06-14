import React, {useMemo} from 'react';
import {View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import ROUTES from '../../constants/routes';
import Home from '../../screen/Home/Home';
import colors from '../../utils/colors';
import VideoTab from '../../screen/VideoTab/VideoTab';
import Profile from '../../screen/Profile/Profile';

const Tab = createBottomTabNavigator();

const renderHomeIcon = ({size, focused}) => {
  return (
    <View>
      <Icon
        name="home"
        size={size}
        color={focused ? colors.tabbar : colors.activeButton}
      />
    </View>
  );
};

const renderVideoTab = ({size, focused}) => {
  return (
    <View>
      <Octicons
        name="video"
        size={size}
        color={focused ? colors.tabbar : colors.activeButton}
      />
    </View>
  );
};

const renderUserIcon = ({size, focused}) => {
  return (
    <View>
      <Icon
        name="user"
        size={size}
        color={focused ? colors.tabbar : colors.activeButton}
      />
    </View>
  );
};
const MainTab = () => {
  const stackOptions = useMemo(
    () => ({headerShown: false, backgroundColor: colors.white}),
    [],
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: stackOptions,
      }}
      initialRouteName={ROUTES.HOME}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          tabBarIcon: renderHomeIcon,
          tabBarLabel: 'Trang chủ',
          tabBarLabelStyle: {
            color: colors.Black,
            fontWeight: 'bold',
            fontSize: 10,
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: renderVideoTab,
          tabBarLabel: 'Bài giảng',
          tabBarLabelStyle: {
            color: colors.Black,
            fontWeight: 'bold',
            fontSize: 10,
          },
        }}
        name={ROUTES.VIDEO_TAB}
        component={VideoTab}
      />

      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: renderUserIcon,
          tabBarLabel: 'Tài khoản',
          tabBarLabelStyle: {
            color: colors.Black,
            fontWeight: 'bold',
            fontSize: 10,
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTab;
