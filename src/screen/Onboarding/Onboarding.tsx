import React, {memo, ReactNode} from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabView,
} from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ROUTES from '../../constants/routes';
import {navigateTo} from '../../navigator/actions';
import {styles} from './styles';

type routeType = {
  key: string;
};
type TabBarProps = SceneRendererProps & {
  navigationState: NavigationState<routeType>;
};
const FirstRoute = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Học tập</Text>
        <Text style={styles.description}>
          Giúp bạn tổng hợp kiến thức dành cho kì thi tốt nghiệp THPT {'\n'}
          Đánh giá kết quả theo môn học
        </Text>
        {/* <FastImage
          source={require('../../assets/images/onboarding1.png')}
          style={styles.image}
          resizeMode={'contain'}
        /> */}
      </View>
    </View>
  );
};

const SecondRoute = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bài giảng</Text>
        <Text style={styles.description}>
          Tổng hợp video bài giảng theo chủ đề giúp bạn ôn luyện kiến thức
        </Text>
      </View>
      {/* <FastImage
        source={require('../../assets/images/onboarding2.png')}
        style={styles.image}
        resizeMode={'contain'}
      /> */}
      <View style={styles.wrapIcon}>
        <Ionicons
          name="md-chevron-forward-circle"
          size={65}
          onPress={() => navigateTo(ROUTES.LOGIN)}
        />
      </View>
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar: (props: TabBarProps) => ReactNode = ({navigationState}) => (
  <View style={styles.wrapTabBar}>
    <View style={styles.wrapDots}>
      {navigationState.routes.map((_, i) => {
        const isActive = navigationState.index === i ? 1 : 0.2;
        return (
          <View key={`${i}`} style={[styles.dotStyle, {opacity: isActive}]} />
        );
      })}
    </View>
  </View>
);

const Onboarding = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: ''},
    {key: 'second', title: ''},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      tabBarPosition={'bottom'}
    />
  );
};

export default memo(Onboarding);
