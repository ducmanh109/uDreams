import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import CommonFonts from '../../utils/CommonFonts';
import CommonHeights from '../../utils/CommonHeights';
import CommonWidths from '../../utils/CommonWidths';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  wrapVideo: {
    width: '100%',
    height: CommonHeights.res300,
    marginLeft: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  video: {
    width: '100%',
    borderRadius: 20,
  },
  listSubjectItem: {
    flexGrow: 0,
    minHeight: CommonHeights.res80,
  },
  wrapSubjectItem: {
    marginVertical: CommonHeights.res16,
    borderWidth: 0.5,
    backgroundColor: '#F7F3F4',
    width: CommonWidths.res90,
    height: CommonHeights.res50,
    marginRight: CommonHeights.res16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  subjectItem: {
    color: colors.Black,
    fontWeight: 'bold',
  },
  wrapTitleItem: {
    marginVertical: CommonHeights.res16,
    alignSelf: 'center',
    backgroundColor: '#91deb4',
    width: '100%',
    minHeight: CommonHeights.res70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: CommonHeights.res8,
    paddingHorizontal: CommonHeights.res16,
    borderRadius: 20,
  },
  titleItem: {
    fontSize: CommonFonts.res16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
