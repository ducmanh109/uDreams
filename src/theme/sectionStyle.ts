import {StyleSheet} from 'react-native';

import colors from '../utils/colors';
import CommonWidths from '../utils/CommonWidths';

export const sectionStyle = StyleSheet.create({
  searchInput: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.shadow,
    paddingLeft: 10,
    marginHorizontal: 8,
    marginVertical: 5,
  },
  wrapSearchInput: {
    flexDirection: 'row',
    backgroundColor: colors.lightBrown,
    borderWidth: 1,
    borderColor: colors.White,
    borderRadius: 20,
    maxWidth: '100%',
    marginHorizontal: CommonWidths.res16,
    marginVertical: CommonWidths.res8,
  },
  inputSearch: {
    color: colors.White,
    fontSize: 16,
    flex: 1,
    paddingHorizontal: CommonWidths.res16,
  },
  tabContent: {
    marginHorizontal: CommonWidths.res16,
    marginVertical: CommonWidths.res16,
  },
  wrapSection: {
    backgroundColor: colors.uncheck,
    borderBottomColor: colors.White,
    borderBottomWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 70,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});
