import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import CommonFonts from '../../utils/CommonFonts';
import CommonHeights from '../../utils/CommonHeights';
import CommonWidths from '../../utils/CommonWidths';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  wrapAvatar: {
    width: '100%',
    height: CommonHeights.res150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: CommonWidths.res80,
    height: CommonHeights.res90,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: colors.inputBorder,
  },
  title: {
    fontSize: CommonFonts.res20,
    marginBottom: 8,
  },
  info: {
    backgroundColor: colors.textInput,
    borderRadius: 10,
    paddingHorizontal: CommonWidths.res16,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    fontSize: CommonFonts.res18,
    marginBottom: CommonHeights.res20,
    paddingVertical: CommonHeights.res18,
  },
  wrapLogout: {
    backgroundColor: colors.error,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: CommonWidths.p70,
    height: CommonHeights.res50,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: CommonHeights.res30,
  },
  txtLogout: {
    fontSize: CommonFonts.res17,
    marginRight: 10,
  },
});
