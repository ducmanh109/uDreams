import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

export const questionStyle = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: colors.White,
  },
  questionHeader: {
    paddingHorizontal: 8,
    width: '100%',
    flexDirection: 'row',
  },
  wrapQuestion: {
    marginHorizontal: 8,
  },
  imageQuestion: {
    width: '100%',
    height: 100,
  },
  counter: {
    fontSize: 18,
    color: colors.Black,
    fontWeight: '600',
  },
  digit: {
    backgroundColor: colors.warning500,
    alignSelf: 'center',
  },
  wrapSequence: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 20,
    marginVertical: 10,
  },
  questionNumber: {
    color: colors.Siam,
    fontSize: 15,
    textAlign: 'center',
  },
  wrapReport: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  warnIcon: {
    marginRight: 5,
  },
  wrapButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  button: {
    // borderRadius: 20,
  },
  txtButton: {
    color: colors.White,
    fontSize: 50,
    fontWeight: '600',
  },
  wrapAnswer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: colors.lightPurple,
    minHeight: 70,
    borderRadius: 20,
    paddingHorizontal: 8,
    marginHorizontal: 8,
  },
  pressedAns: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: colors.Green,
    minHeight: 70,
    borderRadius: 25,
    paddingLeft: 10,
  },
  wrapOption: {
    backgroundColor: colors.corban,
    borderRadius: 20,
    width: 30,
    height: 30,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
  question: {
    paddingHorizontal: 8,
  },
  answer: {
    paddingHorizontal: 8,
    marginVertical: 8,
    paddingVertical: 8,
  },
  wrapDoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    alignSelf: 'center',
  },
  txtDoneButton: {
    color: colors.activeButton,
    fontSize: 20,
  },
});
