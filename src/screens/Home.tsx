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
  Dimensions
} from "react-native";
import { createIconSetFromFontello } from "react-native-vector-icons";
import fontelloConfig from "../assets/config.json";
import { Icons } from "../utils/Enums";
import EStyleSheet from "react-native-extended-stylesheet";
import { Actions } from "react-native-router-flux";
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
        <TouchableOpacity
          onPress={() => Actions.reset("start")}
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end"
          }}
        >
          <Icon
            name={Icons.close}
            size={Dimensions.get('window').width/10}
            color={EStyleSheet.value("$blue")}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 10,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Icon
              name={Icons.strzykawka}
              size={Dimensions.get("window").width / 2}
              color={EStyleSheet.value("$red")}
            />
          </View>
          <View style={{ flex: 1, width: "100%" }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: Dimensions.get("window").width / 18,
                  textAlign: "center",
                  paddingHorizontal: 30
                }}
              >
                {`Kampania crowdfundingowa satyrycznej gry karcianej`}
                <Text
                  style={{
                    color: EStyleSheet.value("$blue"),
                    fontWeight: "bold"
                  }}
                >
                  {` antyszczepionkowcy`}
                </Text>
                <Text
                  style={{
                    color: EStyleSheet.value("$red"),
                    fontWeight: "bold"
                  }}
                >{`.biz\n`}</Text>
                na polakpotrafi.pl już trwa!
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                width: "100%",
                justifyContent: "flex-end",
                alignSelf: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  backgroundColor: EStyleSheet.value("$blue"),
                  width: "85%",
                  height: 70,
                  paddingVertical: 10,
                  borderRadius: 20,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20
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
                    fontSize: 22,
                  }}
                >
                  {`KUP TERAZ`}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
