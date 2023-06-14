//lib
import {Formik} from 'formik';
import React from 'react';
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import ROUTES from '../../constants/routes';
import {navigateTo} from '../../navigator/actions';
import colors from '../../utils/colors';
import {registerValidationSchema} from '../../utils/validation';
import useRegisterLogic from './Register.logic';
//style
import {styles} from './styles';

function Register() {
  const {onRegister} = useRegisterLogic();
  return (
    <SafeAreaView style={styles.contentContainer}>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{
          username: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        onSubmit={onRegister}>
        {({handleChange, handleBlur, values, errors, isValid}) => (
          <>
            <Pressable onPress={Keyboard.dismiss}>
              <View style={styles.registerForm}>
                <TextInput
                  autoCapitalize="none"
                  style={styles.input}
                  placeholder="Tên đăng nhập"
                  placeholderTextColor={colors.Siam}
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                />
                {errors.username && (
                  <Text style={styles.error}>{errors.username}</Text>
                )}
                <TextInput
                  autoCapitalize="none"
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor={colors.Siam}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType={'email-address'}
                />
                {errors.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
                <TextInput
                  autoCapitalize="none"
                  style={styles.input}
                  placeholder="Mật khẩu"
                  placeholderTextColor={colors.Siam}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                />
                {errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
                <TextInput
                  autoCapitalize="none"
                  style={styles.input}
                  placeholder="Nhập lại mật khẩu"
                  placeholderTextColor={colors.Siam}
                  value={values.passwordConfirmation}
                  onChangeText={handleChange('passwordConfirmation')}
                  onBlur={handleBlur('passwordConfirmation')}
                  secureTextEntry
                />
                {errors.passwordConfirmation && (
                  <Text style={styles.error}>
                    {errors.passwordConfirmation}
                  </Text>
                )}
              </View>
            </Pressable>
            <Pressable style={styles.wrapButton} onPress={Keyboard.dismiss}>
              <Text
                style={styles.txtLogin}
                onPress={() => navigateTo(ROUTES.LOGIN)}>
                Đã có tài khoản? Đăng nhập
              </Text>
              <Pressable
                disabled={
                  !values.username || !values.email || !values.password
                    ? true
                    : false
                }
                style={[
                  styles.button,
                  {
                    backgroundColor: isValid
                      ? colors.secondary
                      : colors.backgroundSliderIos,
                  },
                ]}
                onPress={() =>
                  onRegister(values.username, values.email, values.password)
                }>
                <Text style={styles.txtButton}>Đăng ký</Text>
              </Pressable>
            </Pressable>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}
export default Register;
