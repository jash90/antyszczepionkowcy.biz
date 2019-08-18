import React from "react";
import { Text, Dimensions } from "react-native";
import _ from "underscore";
import { site2, site1 } from "../utils/Const";
import EStyleSheet from "react-native-extended-stylesheet";
interface Props {
  children: string;
}
export const RedTitle: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Text style={styles.text}>{children}</Text>
    </>
  );
};

const styles = EStyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "$red",
    textAlign: "center",
    padding: 10
  }
});

/* 
fontSize: 24,
fontWeight: "bold",
color: EStyleSheet.value("$red"),
textAlign: "center",
paddingVertical: 10


fontSize: 24,
fontWeight: "bold",
color: EStyleSheet.value("$red"),
textAlign: "center",
paddingVertical: 10

color: EStyleSheet.value("$red"),
fontWeight: "bold",
fontSize: 24,
textAlign: "center",
padding: 10

color: EStyleSheet.value("$red"),
fontWeight: "bold",
fontSize: 24,
textAlign: "center",
padding: 10

color: EStyleSheet.value("$red"),
fontWeight: "bold",
fontSize: 24,
textAlign: "center",
paddingHorizontal: 10

*/