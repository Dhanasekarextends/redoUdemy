import React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import ListItem from "./listItem";

const list = props => {
  let places = props.placesList.map((place, i)=>{
      return(<ListItem key={i} placeImage={place.image} placeName={place.name} onPress={()=>props.onclick(i)} />);
  });

//   let places = <FlatList data={props.placesList} renderItem={({item})=>{
//     return(<ListItem placeName={item.name} placeImage={item.image} onPress={props.onclick} />);
//   }} />


  return <ScrollView style={styles.listStyle}>{places}</ScrollView>;
};

const styles = StyleSheet.create({
  listStyle: {
    width: "100%"
  }
});

export default list;
