import {MMKVLoader} from 'react-native-mmkv-storage';

const SessionMMKVStore = new MMKVLoader()
  .withInstanceID('SESSION')
  .withEncryption()
  .encryptWithCustomKey('SESSION_KEY', true, 'session')
  .initialize();

export default SessionMMKVStore;
