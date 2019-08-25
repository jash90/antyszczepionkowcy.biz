import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import _ from 'underscore';

interface ButtonProps {
  text: string;
  value: boolean;
  onPress: any;
  styleText?: any;
  styleView?: any;
}

export const ButtonDebounce: React.FC<ButtonProps> = ({
  onPress,
  text,
  styleText,
  styleView,
  value
}: ButtonProps) => {
  return (
    <>
      {value && (
        <TouchableOpacity
          style={styleView}
          onPress={_.debounce(() => onPress(), 500, true)}>
          <Text style={styleText}>{text}</Text>
        </TouchableOpacity>
      )}
      {!value && (
        <View style={styleView}>
          <Text style={styleText}>{text}</Text>
        </View>
      )}
    </>
  );
};
