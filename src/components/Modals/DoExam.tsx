import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {modalProps} from '.';
import Modal from 'react-native-modal';
import CommonHeights from '../../utils/CommonHeights';
import CommonWidths from '../../utils/CommonWidths';
import CommonFonts from '../../utils/CommonFonts';
interface ModalExamProps {
  examTitle: string;
  numberOfQuestion: number;
  timeTodo: number;
  onConfirm: Function;
}
const DoExam: React.FC<ModalExamProps & modalProps> = ({
  modalVisible,
  closeModal,
  examTitle,
  onConfirm,
  numberOfQuestion,
  timeTodo,
}) => {
  return (
    <Modal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.txtContainer}>
          <Text style={styles.title}>{examTitle.toUpperCase()}</Text>
          <View style={styles.wrapText}>
            <Text style={styles.text}>Số câu hỏi: </Text>
            <Text style={styles.title}>{numberOfQuestion}</Text>
          </View>
          <View style={styles.wrapText}>
            <Text style={styles.text}>Thời gian: </Text>
            <Text style={styles.title}>{timeTodo} phút</Text>
          </View>
          <Text style={styles.question}>Thực hiện đề thi?</Text>
        </View>

        <View style={styles.btnContainer}>
          <Pressable
            onPress={closeModal}
            style={[styles.wrapButton, {backgroundColor: colors.error}]}>
            <Text style={styles.txtButton}>Huỷ</Text>
          </Pressable>
          <Pressable onPress={() => onConfirm()} style={styles.wrapButton}>
            <Text style={styles.txtButton}>Bắt đầu</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default DoExam;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minHeight: CommonHeights.res300,
    borderRadius: 30,
    paddingVertical: CommonHeights.res30,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  btnContainer: {
    fontSize: CommonFonts.res20,
    flexDirection: 'row',
    marginHorizontal: CommonWidths.res50,
    justifyContent: 'space-between',
  },
  wrapButton: {
    backgroundColor: colors.GreenTick,
    borderRadius: 20,
    width: CommonWidths.p25,
    height: CommonHeights.res50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtButton: {
    color: colors.White,
    fontWeight: 'bold',
  },
  txtContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: CommonFonts.res20,
    fontWeight: 'bold',
  },
  wrapText: {
    flexDirection: 'row',
  },
  text: {
    fontSize: CommonFonts.res18,
  },
  question: {
    fontSize: CommonFonts.res18,
    marginTop: CommonHeights.res30,
  },
});
