import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const listItem = props => {
  return (
    <TouchableOpacity style={styles.listView} onPress={props.onPress}>
      <Image
        resizeMode="contain"
        style={styles.imageStyle}
        source={props.placeImage}
      />
      <Text style={styles.textStyle}>{props.placeName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    padding: 10
  },
  listView: {
    backgroundColor: "#eee",
    margin: 5,
    flexDirection: "row"
  },
  imageStyle: {
    padding: 10,
    height: "100%",
    width: 30,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default listItem;
