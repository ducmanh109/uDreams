import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {firebase} from '@react-native-firebase/database';
import CommonStyles from '../../../utils/CommonStyles';
import Header from '../../../components/Header/Header';
import colors from '../../../utils/colors';
import DoExam from '../../../components/Modals/DoExam';
import {styles} from './styles';
import {navigateTo} from '../../../navigator/actions';
import ROUTES from '../../../constants/routes';
import {stopListenData} from '../../../data/database';

const Subject = ({route}) => {
  const {subjectName} = route.params;
  const {subjectID} = route.params;

  const [data, setData] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [examIndex, setExamIndex] = useState(0);
  const [examTitle, setExamTitle] = useState('');
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);
  const [timeTodo, setTimeTodo] = useState(0);
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);

  const showModal = useCallback(
    (title: string, index: number) => {
      setModalVisible(true);
      setExamIndex(index);
      setExamTitle(title);
      if (subjectID === 'Literature') {
        setNumberOfQuestion(1);
      } else {
        setNumberOfQuestion(data[examIndex].questions.length);
      }
      if (subjectID === 'Literature') {
        setTimeTodo(120);
      } else if (subjectID === 'Math') {
        setTimeTodo(90);
      } else if (
        subjectID === 'Physic' ||
        subjectID === 'Chemical' ||
        subjectID === 'Biology' ||
        subjectID === 'History' ||
        subjectID === 'Geography' ||
        subjectID === 'Technology'
      ) {
        setTimeTodo(50);
      } else {
        setTimeTodo(60);
      }
    },
    [data, examIndex, subjectID],
  );
  const confirmDoExam = () => {
    setModalVisible(false);
    if (subjectID === 'Literature') {
      navigateTo(ROUTES.LITERATURE, {
        examTitle: data[examIndex].title,
        examImage: data[examIndex].imageQuestion,
        resultImage: data[examIndex].imageResult,
      });
    } else {
      navigateTo(ROUTES.EXAM, {
        subjectID,
        examIndex,
        numberOfQuestion,
        timeTodo,
      });
    }
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  //firebase
  useEffect(() => {
    firebase
      .app()
      .database(
        'https://udreams-d728e-default-rtdb.asia-southeast1.firebasedatabase.app/',
      )
      .ref(`/${subjectID}`)
      .once('value')
      .then(snapshot => {
        setData(snapshot.val());
        setSearchList(snapshot.val());
      });
    return stopListenData;
  }, [subjectID]);

  const searchExam = (text: string) => {
    if (text) {
      const newData = data.filter(function (item) {
        const itemTitle = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const itemDescription = item.description
          ? item.description.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return (
          itemTitle.indexOf(textData) > -1 ||
          itemDescription.indexOf(textData) > -1
        );
      });
      setSearchList(newData);
      setSearch(text);
    } else {
      setSearchList(data);
      setSearch(text);
    }
  };
  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <View style={styles.wrapSection}>
          <View style={styles.sectionItem}>
            <Text style={styles.title}>{item.title.toUpperCase()}</Text>
            <Text style={styles.descript}>{item.description}</Text>
          </View>
          <View style={styles.icon}>
            <Ionicons
              name="arrow-forward-circle"
              size={36}
              style={styles.icon}
              onPress={() => showModal(item.title, index)}
            />
          </View>
        </View>
      );
    },
    [showModal],
  );

  const keyExtractor = useCallback((item: any) => item.title, []);

  const ListEmptyComponent = useCallback(() => {
    return (
      <ActivityIndicator
        size={'large'}
        color={'red'}
        style={styles.indicator}
      />
    );
  }, []);
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Header
        headerTitle={'Bộ đề thi môn ' + subjectName}
        showBackButton={true}
      />
      <View style={styles.wrapTxtInputIcon}>
        <SimpleLineIcons name="magnifier" size={24} color={colors.Black} />
        <TextInput
          style={styles.txtInput}
          placeholder="Tìm kiếm đề thi"
          placeholderTextColor={colors.Black}
          clearButtonMode={'while-editing'}
          value={search}
          onChangeText={value => searchExam(value)}
        />
      </View>

      {!data ? (
        <View style={styles.wrapListEmpty}>
          <Text style={styles.noData}>Không tìm thấy dữ liệu</Text>
        </View>
      ) : (
        <FlatList
          data={searchList}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
      <DoExam
        modalVisible={modalVisible}
        closeModal={closeModal}
        examTitle={examTitle}
        onConfirm={confirmDoExam}
        numberOfQuestion={numberOfQuestion}
        timeTodo={timeTodo}
      />
    </SafeAreaView>
  );
};
export default Subject;
