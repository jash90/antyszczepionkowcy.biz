import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Linking } from "react-native";
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
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: EStyleSheet.value("$navy")
        }}>
        <View
          style={{
            width: "100%",
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginRight: 20
          }}>
          <Icon
            name={Icons.close}
            size={50}
            color={EStyleSheet.value("$blue")}
          />
        </View>
        <View
          style={{
            flex: 10,
            alignItems: "center",
            justifyContent: "flex-start"
          }}>
          <View
            style={{ flex: 3, alignItems: "center", justifyContent: "center" }}>
            <Icon
              name={Icons.strzykawka}
              size={200}
              color={EStyleSheet.value("$red")}
            />
          </View>
          <View style={{ flex: 3 }}>
            <Text
              style={{
                color: "white",
                fontSize: 22,
                textAlign: "center",
                paddingHorizontal: 30
              }}>
              {`Kampania crowdfundingowa satyrycznej gry karcianej`}
              <Text style={{ color: EStyleSheet.value("$blue") }}>
                {` antyszczepionkowcy`}
              </Text>
              <Text
                style={{ color: EStyleSheet.value("$red") }}>{`.biz\n`}</Text>
              na polakpotrafi.pl już trwa!
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: EStyleSheet.value("$blue"),
                paddingHorizontal: 30,
                paddingVertical: 20,
                borderRadius: 20,
                borderWidth: 1,
                marginTop: 50
              }}
              onPress={()=>Linking.openURL('https://www.google.com')}
              >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 40
                }}>
                KUP TERAZ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
