import {firebase} from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {profileStore} from '../profile/profile.store';
export const myDatabase = firebase
  .app()
  .database(
    'https://udreams-d728e-default-rtdb.asia-southeast1.firebasedatabase.app/',
  );
export const getUserInfo = () => {
  const getInfo = profileStore(state => state.getUserInfo);
  auth().currentUser.providerData.forEach(userInfo => {
    return getInfo(userInfo);
  });
};
export const stopListenData = () => {
  firebase.app().database().ref().off('value');
};
