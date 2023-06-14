import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ROUTES from '../../constants/routes';
import Login from '../../screen/Login/Login';
import Register from '../../screen/Register/Register';
import Onboarding from '../../screen/Onboarding/Onboarding';

const Stack = createNativeStackNavigator();
const UnAuthorizedStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};
export default UnAuthorizedStack;
