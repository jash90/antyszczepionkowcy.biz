import React from "react";
import { Text, Dimensions } from "react-native";
import _ from "underscore";
import { site2, site1 } from "../utils/Const";
import EStyleSheet from "react-native-extended-stylesheet";
interface Props {
  capitalize?: boolean;
}
export const TitleSite: React.FC<Props> = ({ capitalize }) => {
  return (
    <>
      <Text style={styles.text}>
        <Text
          style={[
            styles.textBlue,
            { textTransform: capitalize ? "capitalize" : "none" }
          ]}>
          {site1}
        </Text>
        <Text style={styles.textWhite}>{"."}</Text>
        <Text style={styles.textRed}>{site2}</Text>
      </Text>
    </>
  );
};

const styles = EStyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: Dimensions.get("window").width / 18,
    textAlign: "center",
    fontFamily: "WorkSans"
  },
  textRed: {
    color: "$red"
  },
  textBlue: {
    color: "$blue"
  },
  textWhite: {
    color: "white"
  },
  textContainer: {
    flex: 1,
    justifyContent: "center"
  }
});
