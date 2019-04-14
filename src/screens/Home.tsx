import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Dimensions
} from "react-native";
import { createIconSetFromFontello } from "react-native-vector-icons";
import fontelloConfig from "../../assets/config.json";
import { Icons } from "../utils/Enums";
import EStyleSheet from "react-native-extended-stylesheet";
import { Actions } from "react-native-router-flux";
import {
  buy,
  crowFundSite,
  crowFund2,
  site2,
  site1,
  crowFund1
} from "../utils/Const";
const Icon = createIconSetFromFontello(fontelloConfig);

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity onPress={() => this.onClose()} style={styles.close}>
          <Icon
            name={Icons.close}
            size={Dimensions.get("window").width / 10}
            color={EStyleSheet.value("$blue")}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Icon
              name={Icons.strzykawka}
              size={Dimensions.get("window").width / 2}
              color={EStyleSheet.value("$red")}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {crowFund1}
                <Text style={styles.textBlue}>{site1}</Text>
                <Text style={styles.textRed}>{site2}</Text>
                {crowFund2}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.onBuy()}
              >
                <Text style={styles.buttonText}>{buy}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  onClose() {
    Actions.reset("start");
  }
  onBuy() {
    Linking.openURL(crowFundSite);
  }
}

const styles = EStyleSheet.create({
  textRed: {
    color: "$red",
    fontWeight: "bold"
  },
  textBlue: {
    color: "$blue",
    fontWeight: "bold"
  },
  text: {
    color: "white",
    fontSize: Dimensions.get("window").width / 18,
    textAlign: "center",
    paddingHorizontal: 30,
    fontFamily: 'WorkSans',
  },
  textContainer: {
    flex: 1,
    justifyContent: "center"
  },
  content: { flex: 1, width: "100%" },
  container: {
    flex: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignSelf: "center"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    fontFamily: 'WorkSans',
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
    marginBottom: 20
  },
  close: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  safeArea: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "$navy",
    padding: 10
  }
});
