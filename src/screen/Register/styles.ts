import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import CommonFonts from '../../utils/CommonFonts';
import CommonHeights from '../../utils/CommonHeights';
import CommonWidths from '../../utils/CommonWidths';

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: colors.White,
  },
  txtRegister: {
    alignSelf: 'center',
    marginTop: CommonHeights.res20,
    color: colors.Siam,
    fontWeight: '700',
    fontSize: CommonFonts.res18,
  },
  registerForm: {
    marginHorizontal: CommonWidths.res25,
    flexDirection: 'column',
    marginTop: CommonHeights.res50,
  },
  input: {
    borderBottomColor: colors.dark,
    borderBottomWidth: 0.6,
    fontSize: CommonFonts.res16,
    marginTop: CommonHeights.res8,
    height: CommonHeights.p8,
    color: colors.Black,
  },
  error: {
    color: colors.Red,
    marginTop: CommonHeights.res10,
  },
  txtLogin: {
    textAlign: 'center',
    color: colors.Siam,
    marginTop: CommonHeights.res50,
    width: CommonWidths.res250,
    alignSelf: 'center',
  },
  button: {
    marginHorizontal: CommonWidths.res40,
    marginTop: CommonHeights.res100,
    height: CommonHeights.res60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtButton: {
    fontSize: CommonFonts.res18,
    color: colors.coldLight,
  },
  wrapButton: {
    marginTop: CommonHeights.res10,
  },
});
