import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  description,
  title,
  antySite,
  advantages,
  cards,
  patrons,
  supporters,
  patronsHonors,
  whos,
  mediaTitle,
  mecenases,
  DILSite,
  UMSite,
  patronsHonorsTitle,
  visialisations,
  whoTitle
} from "../utils/Const";
import { TitleSite } from "../components/TitleSite";
import { PatronsList } from "../components/PatronsList";
import { RedTitle } from "../components/RedTitle";
import { CloseIcon } from "../components/CloseIcon";
import { BuyButton } from "../components/BuyButton";
import { TextDescription } from "../components/TextDescription";
import { AdvantageItem } from "../components/AdvantageItem";
import { RCImage } from "../components/RCImage";
import { Actions } from "react-native-router-flux";

export default class About extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <CloseIcon onPress={()=>Actions.start()} />
          <TouchableOpacity onPress={() => Linking.openURL(antySite)}>
            <RCImage
              uri="biz"
              width={150}
              height={150}
              style={styles.padding10}
            />
          </TouchableOpacity>
          <RedTitle>{title}</RedTitle>
          <Text style={styles.description}>{description}</Text>
          <RCImage
            uri="box"
            width={300}
            height={300}
            style={styles.padding10}
          />
          <FlatList
            data={advantages}
            renderItem={({ item }) => {
              return (
                <AdvantageItem
                  title={item.text}
                  img={item.img}
                  description={item.description}
                />
              );
            }}
          />
        </View>
        <RedTitle>{visialisations}</RedTitle>
        <FlatList
          horizontal
          data={cards}
          renderItem={({ item }) => {
            return <Image source={{ uri: item }} style={styles.img} />;
          }}
        />
        <BuyButton />
        <View style={styles.whiteContainer}>
          <RedTitle>{whoTitle}</RedTitle>
          <View>
            <RCImage
              uri="who"
              width={200}
              height={200}
              style={{
                marginVertical: 10
              }}
            />
            <FlatList
              style={styles.padding10}
              data={whos}
              renderItem={({ item }: any) => {
                return (
                  <TextDescription
                    text={item.person}
                    description={item.description}
                  />
                );
              }}
            />
            <RedTitle>{patronsHonorsTitle}</RedTitle>
            <TouchableOpacity onPress={() => Linking.openURL(UMSite)}>
              <RCImage
                uri="um"
                width={"90%"}
                height={180}
                style={{
                  marginVertical: -40
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(DILSite)}>
              <RCImage uri="dil" width={"90%"} height={180} />
            </TouchableOpacity>
            <FlatList
              style={styles.padding10}
              data={patronsHonors}
              renderItem={({ item }: any) => {
                return (
                  <TextDescription
                    text={item.person}
                    description={item.description}
                  />
                );
              }}
            />
            <RedTitle>{mediaTitle}</RedTitle>
            <PatronsList items={patrons} />
            <RedTitle>{mecenases}</RedTitle>
            <PatronsList items={supporters} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = EStyleSheet.create({
  scroll: { backgroundColor: "$navy" },
  container: { paddingTop: 10, paddingHorizontal: 10 },
  description: { fontSize: 20, color: "white", textAlign: "justify" },
  whiteContainer: { width: "100%", backgroundColor: "white" },
  padding10: { padding: 10 },
  img: {
    width: 200,
    height: 300
  }
});
