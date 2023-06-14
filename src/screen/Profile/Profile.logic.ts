import auth from '@react-native-firebase/auth';
import {profileStore} from '../../data/profile/profile.store';
import {questionStore} from '../../data/question/quetion.store';
import {subjectStore} from '../../data/question/subject.store';

const useProfileLogic = () => {
  const userInfo = profileStore(state => state.userInfo);
  const clearUser = profileStore(state => state.clearUser);
  const clearStore = questionStore(state => state.clearStore);
  const clearSubjectStore = subjectStore(state => state.clearSubjectStore);
  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        clearUser();
        clearStore();
        clearSubjectStore();
      });
  };
  return {userInfo, logout};
};

export default useProfileLogic;
