import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  classifyError: {
    marginTop: 50,
    marginHorizontal: 16,
  },
  txtClassify: {
    fontSize: 20,
    color: colors.Siam,
  },
  wrapInput: {
    marginTop: 70,
    marginHorizontal: 16,
  },
  input: {
    width: '100%',
    height: 200,
    borderColor: colors.backgroundSliderIos,
    borderWidth: 0.8,
    borderRadius: 10,
    marginTop: 15,
    paddingLeft: 10,
  },
  button: {
    width: 250,
    height: 50,
    alignSelf: 'center',
    marginTop: 100,
    borderRadius: 30,
  },
  txtButton: {
    fontSize: 20,
    color: colors.White,
    fontWeight: '700',
  },
  dropdown: {
    backgroundColor: colors.cyan,
    marginTop: 15,
  },
  dropdownItem: {
    fontSize: 20,
    fontWeight: '700',
  },
});
