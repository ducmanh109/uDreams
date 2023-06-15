import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
// import WebView from 'react-native-webview';
import Header from '../../components/Header/Header';
import {myDatabase, stopListenData} from '../../data/database';
import {styles} from './styles';

const VideoTab = () => {
  const [data, setData] = useState([]);
  const [titleData, setTitleData] = useState([]);
  const [subjectIndex, setSubjectIndex] = useState<number>(0);
  const [titleVideo, setTitleVideo] = useState('Khối đa diện');
  const defaultUrl =
    'https://www.youtube.com/embed/xTtRD8hFBSA?rel=0&autoplay=0&showinfo=1&controls=1';
  const [url, setUrl] = useState(defaultUrl);
  console.log('🚀 ~ file: VideoTab.tsx:23 ~ VideoTab ~ url:', url);

  //firebase
  useEffect(() => {
    myDatabase
      .ref('VideoData')
      .once('value')
      .then(snapshot => {
        setData(snapshot.val());
      });
    return stopListenData;
  }, []);

  useEffect(() => {
    myDatabase
      .ref(`VideoData/${subjectIndex}/Video`)
      .once('value')
      .then(snapshot => {
        setTitleData(snapshot.val());
      });
    return stopListenData;
  }, [subjectIndex]);

  const renderSubjectItem = useCallback(({item, index}) => {
    return (
      <TouchableWithoutFeedback onPress={() => setSubjectIndex(index)}>
        <View style={styles.wrapSubjectItem}>
          <Text style={styles.subjectItem}>{item.subject}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }, []);

  const keySubjectExtractor = useCallback((item: any) => item.subject, []);

  const pressTitle = (videoTitle: string, videoUrl: string) => {
    setUrl(videoUrl);
    setTitleVideo(videoTitle);
  };
  const renderTitleItem = useCallback(({item}) => {
    return (
      <View style={styles.wrapTitleItem}>
        <Text
          onPress={() => pressTitle(item.title, item.url)}
          style={styles.titleItem}>
          {item.title}
        </Text>
      </View>
    );
  }, []);

  const keyTitleExtractor = useCallback((item: any) => item.id, []);

  const ListEmptyComponent = useCallback(() => {
    return <ActivityIndicator size={'large'} color={'red'} />;
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle="Video lý thuyết" />
      {/* <View style={styles.wrapVideo}>
        <WebView
          source={{uri: url}}
          containerStyle={styles.video}
          allowsFullscreenVideo={true}
          onLoadProgress={() => (
            <ActivityIndicator size={'large'} color="red" />
          )}
        />
      </View> */}
      <Text style={styles.titleItem}>{titleVideo}</Text>
      <FlatList
        style={styles.listSubjectItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderSubjectItem}
        keyExtractor={keySubjectExtractor}
      />
      <FlatList
        data={titleData}
        renderItem={renderTitleItem}
        ListEmptyComponent={ListEmptyComponent}
        keyExtractor={keyTitleExtractor}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default VideoTab;
