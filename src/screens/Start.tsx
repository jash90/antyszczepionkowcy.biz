import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  PixelRatio,
  Animated,
  Easing,
  Alert,
  Dimensions,
  Vibration,
  Image
} from "react-native";
import { createIconSetFromFontello } from "react-native-vector-icons";
import fontelloConfig from "../assets/config.json";
import { Icons } from "../utils/Enums";
import EStyleSheet from "react-native-extended-stylesheet";
import Wave from "react-native-waveview";
import LottieView from "lottie-react-native";
import { Actions } from "react-native-router-flux";
const Icon = createIconSetFromFontello(fontelloConfig);
interface Props {}
interface State {
  animation: Animated.Value;
  progress: number;
}
export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
      progress: 0
    };
  }

  componentDidMount() {
    this.state.animation.addListener(({ value }) =>
      this.setState({ progress: Number(value) })
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: EStyleSheet.value("$navy"),
          padding: 10
        }}
      >
        <View
          style={{ flex: 1, width: "100%", justifyContent: "flex-start" }}
        >
          <TouchableOpacity onPress={()=>Linking.openURL('https://www.raccoonsoftware.pl')} style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/images/logo-only-icon.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ color: "white", fontSize: 16 }}>
              © Copyright 2019 RaccconSoftware.pl
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.progress > 0 && (
          <LottieView
            source={require("../assets/animations/loading.json")}
            progress={this.state.animation}
            autoSize
          />
        )}
        {this.state.progress > 0 && (
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingBottom: 200
            }}
          >
            <Text style={{ color: "white", fontSize: 40 }}>
              {(this.state.progress * 100).toFixed(0) + "%"}
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={{
            backgroundColor: EStyleSheet.value("$blue"),
            width: "85%",
            height: 70,
            paddingVertical: 10,
            borderRadius: 20,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            Vibration.vibrate(
              [
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100
              ],
              false
            );
            Animated.timing(this.state.animation, {
              toValue: 1,
              duration: 5000,
              easing: Easing.linear
            }).start(() => {
              this.state.animation.addListener(({ value }) =>
                this.setState({ progress: Number(value) })
              );
              Alert.alert("Informacja", "Woda została ustrykturyzowana.", [
                { text: "OK", onPress: () => Actions.home() }
              ]);
            });
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 22
            }}
          >
            {this.state.progress > 0
              ? this.state.progress === 1
                ? `Strukturyzacja zakończona`
                : `Strukturyzacja w toku`
              : `Strukturyzuj wodę`}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
