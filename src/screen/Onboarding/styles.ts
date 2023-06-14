import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import CommonHeights from '../../utils/CommonHeights';
import CommonWidths from '../../utils/CommonWidths';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: CommonWidths.res16,
    paddingVertical: CommonWidths.res16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 36,
    color: colors.orange,
    fontWeight: 'bold',
  },
  description: {
    width: '100%',
    marginTop: CommonHeights.res8,
    fontSize: 18,
    fontWeight: '600',
    color: colors.OxfordBlue,
    lineHeight: 24,
  },
  image: {
    width: '100%',
    height: CommonHeights.res400,
    marginTop: CommonHeights.res24,
  },
  wrapIcon: {
    marginTop: CommonHeights.res30,
    alignItems: 'flex-end',
  },
  wrapTabBar: {
    width: '100%',
    backgroundColor: colors.White,
  },
  wrapDots: {
    alignSelf: 'center',
    width: CommonWidths.res30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: CommonHeights.res50,
  },
  dotStyle: {
    height: 10,
    width: 10,
    backgroundColor: colors.Black,
    borderRadius: 100,
  },
});
