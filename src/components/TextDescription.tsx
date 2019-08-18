import React from "react";
import { Text, View } from "react-native";
import _ from "underscore";
import EStyleSheet from "react-native-extended-stylesheet";
interface Props {
  text: string;
  description: string;
}
export const TextDescription: React.FC<Props> = ({ text, description }) => {
  return (
    <View>
      <Text style={styles.text}>
        <Text style={styles.textRed}>{text}</Text>
        {description}
      </Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  text: {
    fontSize: 18
  },
  textRed: {
    color: "$red",
    fontWeight: "bold"
  }
});
