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
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end"
          }}
        >
          <Icon
            name={Icons.close}
            size={50}
            color={EStyleSheet.value("$blue")}
          />
        </View>
        <View
          style={{
            flex: 10,
            width:'100%',
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
              size={200}
              color={EStyleSheet.value("$red")}
            />
          </View>
          <View style={{ flex: 1, width:'100%' }}>
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 22,
                  textAlign: "center",
                  paddingHorizontal: 30,
                  paddingBottom: 20
                }}
              >
                {`Kampania crowdfundingowa satyrycznej gry karcianej`}
                <Text style={{ color: EStyleSheet.value("$blue") }}>
                  {` antyszczepionkowcy`}
                </Text>
                <Text
                  style={{ color: EStyleSheet.value("$red") }}
                >{`.biz\n`}</Text>
                na polakpotrafi.pl już trwa!
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "flex-start",
                alignSelf: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf:'center',
                  backgroundColor: EStyleSheet.value("$blue"),
                  width:'70%',
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
                  {`KUP TERAZ ${PixelRatio.get()}`}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
