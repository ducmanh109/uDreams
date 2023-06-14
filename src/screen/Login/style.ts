import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import CommonHeights from '../../utils/CommonHeights';

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: colors.activeButton,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  loginContainer: {
    position: 'absolute',
    width: '100%',
    height: 426,
    borderRadius: 30,
    backgroundColor: colors.White,
    paddingHorizontal: 25,
  },
  email: {
    backgroundColor: colors.textInput,
    marginTop: 43,
    borderRadius: 10,
    height: CommonHeights.res60,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.Black,
  },
  password: {
    backgroundColor: colors.textInput,
    marginTop: 20,
    borderRadius: 10,
    height: CommonHeights.res60,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    paddingVertical: 12,
    color: colors.Black,
    fontSize: 16,
  },
  btnLogin: {
    marginTop: 50,
    width: '100%',
    height: CommonHeights.res65,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    backgroundColor: colors.secondary,
  },
  txtLogin: {
    color: colors.White,
    fontWeight: '600',
    fontSize: 17,
  },
  btnRegister: {
    marginTop: 70,
    alignSelf: 'center',
    fontSize: 16,
  },
});
