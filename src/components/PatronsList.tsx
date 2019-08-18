import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  FlatList
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
interface Props {
  items: any[];
}
export const PatronsList: React.FC<Props> = ({ items }) => {
  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.container}
              onPress={() => Linking.openURL(item.link)}>
              <Image resizeMode="contain" style={styles.image} source={{ uri: item.img }} />
              <Text style={styles.title}>{item.text}</Text>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </>
  );
};

const styles = EStyleSheet.create({
  title: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 5,
    flexDirection: "row",
    width: "100%",
    flexWrap:"wrap"
  },
  image: { width: 150, height: 150, alignSelf: "center" },
  container: { margin: 10,  width: 150, },
  separator: { paddingHorizontal: 5 }
});
