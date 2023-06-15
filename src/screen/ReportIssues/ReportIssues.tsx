import React from 'react';
import {SafeAreaView} from 'react-native';
// import {Picker} from '@react-native-picker/picker';

const ReportIssue = () => {
  // const [selectedLanguage, setSelectedLanguage] = useState();

  // const onValueChange = useCallback(({ itemValue }) => {
  //   setSelectedLanguage(itemValue);
  // }, []);

  // const onSubmitReport = () => {
  //   Alert.alert('Thông báo', 'Cảm ơn bạn đã gửi thông báo lỗi!');
  // };
  return (
    <SafeAreaView>
      {/* <View style={styles.header}>
        <FontAweSome name="warning" size={26} color={colors.Red} />
        <Text style={styles.headerTitle}>BÁO LỖI CÂU HỎI</Text>
        <Fontisto name="close" size={26} onPress={goBack} />
      </View>
      <View style={styles.classifyError}>
        <Text style={styles.txtClassify}>Phân loại lỗi: </Text>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedLanguage}
          mode={'dropdown'}
          onValueChange={onValueChange}>
          <Picker.Item
            style={styles.dropdownItem}
            label="Nội dung câu hỏi sai"
            value="question"
          />
          <Picker.Item
            style={styles.dropdownItem}
            label="Hình ảnh bị lỗi"
            value="image"
          />
          <Picker.Item
            style={styles.dropdownItem}
            label="Đáp án sai"
            value="answer"
          />
          <Picker.Item style={styles.dropdownItem} label="Khác" value="other" />
        </Picker>
      </View>
      <View style={styles.wrapInput}>
        <Text style={styles.txtClassify}>
          Vui lòng mô tả lỗi bạn gặp phải:{' '}
        </Text>
        <TextInput
          placeholder="Nội dung lỗi bạn gặp phải"
          style={styles.input}
          multiline
        />
        <Button
          text="Gửi ngay"
          color={colors.cyan}
          style={styles.button}
          textStyle={styles.txtButton}
          onPress={onSubmitReport}
        />
      </View> */}
    </SafeAreaView>
  );
};
export default ReportIssue;
