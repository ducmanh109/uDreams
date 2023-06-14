import React, {memo} from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
  StyleSheet,
  Pressable,
} from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean | undefined;
  text: string;
  color?: string;
  style?: StyleProp<ViewStyle> | undefined;
  textStyle?: StyleProp<TextStyle> | undefined;
}

const Button = (props: ButtonProps) => {
  const {text, style, textStyle, color, onPress, disabled} = props;
  return (
    <Pressable onPress={onPress} disabled={disabled} hitSlop={0}>
      <View style={[style, styles.text, {backgroundColor: color}]}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default memo(Button);
