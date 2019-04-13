import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  PixelRatio
} from "react-native";
import { createIconSetFromFontello } from "react-native-vector-icons";
import fontelloConfig from "../assets/config.json";
import { Icons } from "../utils/Enums";
import EStyleSheet from "react-native-extended-stylesheet";
import Wave from 'react-native-waveview';
import LottieView from "lottie-react-native";
const Icon = createIconSetFromFontello(fontelloConfig);
interface Props {}
export default class Home extends Component<Props> {
  render() {
    return (
      <SafeAreaView
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: EStyleSheet.value("$navy"),
          padding: 10
        }}
      >
        <LottieView source={require("../assets/935-loading.json")} autoPlay loop />
        <TouchableOpacity
          style={{
            alignSelf: "center",
            backgroundColor: EStyleSheet.value("$blue"),
            width: "70%",
            paddingVertical: 20,
            borderRadius: 20,
            borderWidth: 1
          }}
          onPress={() =>
            Linking.openURL(
              "https://polakpotrafi.pl/projekt/antyszczepionkowcybiz"
            )
          }
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 22
            }}
          >
            {`Strukturyzuj wodę`}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
