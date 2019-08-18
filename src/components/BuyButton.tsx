import React from "react";
import {
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { buy, crowFundSite } from "../utils/Const";
export const BuyButton: React.FC<{}> = () => {
  return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(crowFundSite)}>
        <Text style={styles.buttonText}>{buy}</Text>
      </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    fontFamily: "WorkSans"
  },
  button: {
    alignSelf: "center",
    backgroundColor: "$blue",
    width: "85%",
    height: 70,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20
  }
});
