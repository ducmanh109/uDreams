import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';
import CommonFonts from '../../../utils/CommonFonts';
import CommonHeights from '../../../utils/CommonHeights';
import CommonWidths from '../../../utils/CommonWidths';
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: CommonWidths.res16,
    paddingVertical: CommonHeights.res16,
    backgroundColor: colors.White,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  digitStyle: {
    backgroundColor: colors.White,
    borderWidth: 1,
  },
  btnSubmit: {},
  txtSubmit: {
    fontSize: CommonFonts.res16,
    fontWeight: '700',
    color: colors.activeButton,
  },
  quesTitle: {
    fontWeight: 'bold',
  },
  listAnswer: {
    paddingVertical: 16,
  },
  wrapAnswer: {
    flexDirection: 'row',
    marginVertical: CommonHeights.res24,
    borderRadius: 22,
  },
  wrapAnswer1: {
    flexDirection: 'row',
    marginVertical: CommonHeights.res24,
    backgroundColor: colors.GreenTick,
    borderRadius: 22,
  },
  wrapOption: {
    width: CommonWidths.res60,
    height: CommonHeights.res60,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: CommonWidths.res8,
  },
  option: {
    color: 'green',
    fontSize: CommonFonts.res18,
    fontWeight: '700',
  },
  wrapContent: {
    alignItems: 'center',
    flexDirection: 'row',
    flexShrink: 1,
    paddingHorizontal: CommonHeights.res8,
    paddingVertical: CommonWidths.res5,
  },
  imageQuestion: {
    height: CommonHeights.res180,
    marginVertical: CommonHeights.res8,
  },
  wrapButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.1,
  },
  resultImage: {
    height: 500,
    width: '100%',
    marginVertical: 10,
  },
  wrapHeaderResult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapBackHome: {
    flexDirection: 'row',
  },
  wrapQuestion: {
    flexShrink: 1,
    marginBottom: CommonHeights.res10,
  },
});
