import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';
import CommonWidths from '../../../utils/CommonWidths';
export const styles = StyleSheet.create({
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
  wrapSection: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 24,
    minHeight: 97,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    backgroundColor: colors.White,
    marginVertical: 16,
    paddingLeft: 16,
    paddingVertical: 25,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.Black,
  },
  descript: {
    fontSize: 13,
    fontWeight: '300',
    marginTop: 8,
  },
  icon: {
    alignSelf: 'center',
    flex: 0.2,
    marginHorizontal: 8,
  },
  sectionItem: {
    flex: 0.9,
  },
  indicator: {
    alignSelf: 'center',
  },
  wrapListEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noData: {
    fontSize: 16,
    fontWeight: '600',
  },
});
