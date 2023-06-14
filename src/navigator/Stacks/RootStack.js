import auth from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import ROUTES from '../../constants/routes';

const Stack = createNativeStackNavigator();
function RootStack() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = useCallback(
    userState => {
      setUser(userState);
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!user ? (
          <Stack.Screen
            name={ROUTES.UNAUTHORIZED}
            component={require('./UnAuthorizedStack').default}
          />
        ) : (
          <Stack.Screen
            name={ROUTES.AUTHORIZED}
            component={require('./AuthorizedStack').default}
          />
        )}
      </Stack.Navigator>
    </>
  );
}
export default RootStack;
