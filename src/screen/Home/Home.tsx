import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import Content from './ChildComponent/Content';
import Header from './ChildComponent/Header';
import SubjectItem from './ChildComponent/SubjectItem';
import useHomeLogic from './Home.logic';
import {styles} from './styles';

function Home() {
  const {subjectData} = useHomeLogic();
  const renderItem = useCallback(({item}) => {
    return <SubjectItem item={item} />;
  }, []);

  const keyExtractor = useCallback(item => {
    return item.id;
  }, []);

  const ListEmptyComponent = useCallback(() => {
    return <ActivityIndicator size={'large'} color={'red'} />;
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <Header />
      <Content />
      <FlatList
        data={subjectData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        bounces={false}
        numColumns={3}
        contentContainerStyle={styles.listSubject}
        ListEmptyComponent={ListEmptyComponent}
        scrollEnabled={true}
      />
      <Toast />
    </SafeAreaView>
  );
}
export default Home;
