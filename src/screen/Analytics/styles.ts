import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import CommonFonts from '../../utils/CommonFonts';
import CommonHeights from '../../utils/CommonHeights';
import CommonWidths from '../../utils/CommonWidths';
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.White,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  list: {
    marginHorizontal: CommonWidths.res16,
    paddingVertical: CommonHeights.res16,
  },
  wrapSubjectItem: {
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    height: CommonHeights.res50,
    alignItems: 'center',
    marginVertical: CommonHeights.res10,
    paddingLeft: CommonWidths.res8,
  },
  image: {
    width: CommonWidths.res30,
    height: CommonHeights.res30,
    marginRight: 10,
  },
  subjectItem: {
    fontSize: CommonFonts.res18,
  },
  wrapTxtInputIcon: {
    flexDirection: 'row',
    backgroundColor: colors.textInput,
    padding: 8,
    alignItems: 'center',
    borderRadius: CommonWidths.res32,
    marginHorizontal: CommonWidths.res16,
    marginVertical: CommonWidths.res8,
    paddingHorizontal: CommonWidths.res16,
  },
  txtInput: {
    color: colors.Black,
    fontSize: 16,
    flex: 1,
    paddingHorizontal: CommonWidths.res16,
  },
});
