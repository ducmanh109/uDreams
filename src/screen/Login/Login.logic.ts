import auth from '@react-native-firebase/auth';
import {navigateTo} from '../../navigator/actions/index';
import ROUTES from '../../constants/routes';
import {Alert, ToastAndroid} from 'react-native';

const useLoginLogic = () => {
  const onLogin = (email: string, password: string) => {
    if (!email || !password) {
      Alert.alert('uDreams', 'Bạn chưa nhập thông tin!');
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() =>
        setTimeout(
          () => ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT),
          500,
        ),
      )
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Không tìm thấy tài khoản của bạn');
        }
        if (
          error.code === 'auth/invalid-email' ||
          error.code === 'auth/wrong-password'
        ) {
          Alert.alert('uDreams', 'Email hoặc mật khẩu không đúng');
        }
      });
  };
  const redirectRegister = () => {
    navigateTo(ROUTES.REGISTER);
  };
  return {redirectRegister, onLogin};
};
export default useLoginLogic;
