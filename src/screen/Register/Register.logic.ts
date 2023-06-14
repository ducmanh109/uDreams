import auth from '@react-native-firebase/auth';
import {Alert, ToastAndroid} from 'react-native';
import {myDatabase} from '../../data/database';
import {profileStore} from '../../data/profile/profile.store';

const useRegisterLogic = () => {
  const getUserInfo = profileStore(state => state.getUserInfo);
  const onRegister = (username: string, email: string, password: string) => {
    getUserInfo({username, email});
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        if (userCredentials.user) {
          userCredentials.user.updateProfile({
            displayName: username,
          });
        }
      })
      .then(() => ToastAndroid.show('Đăng kí thành công', ToastAndroid.SHORT))
      .then(() => {
        myDatabase.ref(`Analytics/${username}/CommonValue`).update({
          complete: 0,
          ignore: 0,
          correct: 0,
          wrong: 0,
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('uDreams', 'Tài khoản đã tồn tại');
        }
      });
  };
  return {onRegister};
};
export default useRegisterLogic;
