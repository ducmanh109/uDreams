import {useEffect, useState} from 'react';
import {firebase} from '@react-native-firebase/database';
import {myDatabase, stopListenData} from '../../data/database';
import {profileStore} from '../../data/profile/profile.store';

const useHomeLogic = () => {
  const userInfo = profileStore(state => state.userInfo);
  const [subjectData, setSubjectData] = useState([]);
  const [analyticData, setAnalyticData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  //firebase
  useEffect(() => {
    firebase
      .app()
      .database(
        'https://udreams-d728e-default-rtdb.asia-southeast1.firebasedatabase.app/',
      )
      .ref('SubjectData')
      .once('value')
      .then(snapshot => {
        setSubjectData(snapshot.val());
        setSearchList(snapshot.val());
      });
    return stopListenData;
  }, []);

  useEffect(() => {
    myDatabase
      .ref(`Analytics/${userInfo?.displayName}/CommonValue`)
      .on('value', snapshot => setAnalyticData(snapshot.val()));
    return stopListenData;
  }, [userInfo?.displayName]);
  //

  const searchSubject = (text: string) => {
    if (text) {
      const newData = subjectData.filter(function (item) {
        const itemSubject = item.subject
          ? item.subject.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemSubject.indexOf(textData) > -1;
      });
      setSearchList(newData);
      setSearch(text);
    } else {
      setSearchList(subjectData);
      setSearch(text);
    }
  };
  return {
    search,
    searchList,
    searchSubject,
    subjectData,
    analyticData,
    setSearch,
  };
};
export default useHomeLogic;
