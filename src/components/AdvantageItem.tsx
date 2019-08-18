import React from "react";
import { Text, Image, View } from "react-native";
import _ from "underscore";
import EStyleSheet from "react-native-extended-stylesheet";
interface Props {
  title: string;
  img: string;
  description: string;
}
export const AdvantageItem: React.FC<Props> = ({ title, img, description }) => {
  return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.container}>
          <Image style={styles.img} source={{ uri: img }} />
          <View style={styles.fill}>
            <Text style={styles.imgText}>{description}</Text>
          </View>
        </View>
      </View>
  );
};
const styles = EStyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row"
  },
  fill: { flex: 1 },
  title: {
    color: "$blue",
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 5
  },
  img: {
    marginRight: 10,
    width: 60,
    height: 60
  },
  imgText: {
    color: "$blue",
    paddingHorizontal: 5
  }
});
