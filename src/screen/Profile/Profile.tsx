import React from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header/Header';
import useProfileLogic from './Profile.logic';
import {styles} from './styles';

const Profile = () => {
  const {userInfo, logout} = useProfileLogic();
  const onLogout = () => {
    Alert.alert('Đăng xuất', 'Bạn muốn đăng xuất khỏi tài khoản?', [
      {
        text: 'Huỷ',
      },
      {
        text: 'Đăng xuất',
        style: 'destructive',
        onPress: logout,
      },
    ]);
  };
  return (
    <SafeAreaView>
      <Header headerTitle="Thông tin đăng nhập" showBackButton={false} />
      <View style={styles.container}>
        <View style={styles.wrapAvatar}>
          <FastImage
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={styles.avatar}
          />
        </View>
        <View>
          <View>
            <Text style={styles.title}>Tên</Text>
            <Text style={styles.info}>{userInfo?.username}</Text>
          </View>
          <View>
            <Text style={styles.title}>Tên đăng nhập</Text>
            <Text style={styles.info}>{userInfo?.username}</Text>
          </View>
          <View>
            <Text style={styles.title}>Email</Text>
            <Text style={styles.info}>{userInfo?.email}</Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => onLogout()}>
          <View style={styles.wrapLogout}>
            <Text style={styles.txtLogout}>Đăng xuất</Text>
            <AntDesign name="logout" size={24} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
