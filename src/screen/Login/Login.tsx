import React, {useCallback, useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './style';
import colors from '../../utils/colors';
import useLoginLogic from './Login.logic';
import Button from '../../components/Button/Button';

function Login() {
  const {redirectRegister, onLogin} = useLoginLogic();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeTextMail = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const onChangeTextPass = useCallback(text => {
    setPassword(text);
  }, []);

  return (
    <SafeAreaView style={styles.contentContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.email}
            placeholder="Email"
            placeholderTextColor={colors.blackColor}
            value={email}
            onChangeText={onChangeTextMail}
          />
          <TextInput
            style={styles.password}
            placeholder="Mật khẩu"
            placeholderTextColor={colors.blackColor}
            secureTextEntry
            value={password}
            onChangeText={onChangeTextPass}
          />
          <Button
            text="Đăng nhập"
            color={colors.secondary}
            style={styles.btnLogin}
            textStyle={styles.txtLogin}
            onPress={() => onLogin(email, password)}
          />
          <Text style={styles.btnRegister} onPress={redirectRegister}>
            Đăng kí tài khoản
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
export default Login;
