import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';
import CommonFonts from '../../../utils/CommonFonts';
import CommonHeights from '../../../utils/CommonHeights';
import CommonWidths from '../../../utils/CommonWidths';
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  digitStyle: {
    backgroundColor: colors.White,
    borderWidth: 1,
  },
  wrapCount: {
    width: CommonWidths.res60,
    height: CommonHeights.res70,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginVertical: CommonHeights.res10,
    backgroundColor: colors.GreenTick,
  },
  txtCount: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '700',
  },
  examTitle: {
    fontSize: CommonFonts.res20,
    fontWeight: 'bold',
  },
  scrollView: {
    marginHorizontal: CommonWidths.res16,
    paddingVertical: CommonHeights.res16,
    flex: 1,
    marginBottom: 30,
  },
  wrapTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pdf: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
  },
});
