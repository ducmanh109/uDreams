import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from '../navigator/Stacks/RootStack';
import {navigationRef, setReady} from './Navigation.ref';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const routeNameRef = React.useRef<string>();

  const onNavigationReady = useCallback(() => {
    routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
    setReady(true);
    SplashScreen.hide();
  }, []);

  const StateNavigatorChange = useCallback(async () => {
    const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name;
    routeNameRef.current = currentRouteName;
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onNavigationReady}
      onStateChange={StateNavigatorChange}>
      <RootStack />
    </NavigationContainer>
  );
};
export default App;
