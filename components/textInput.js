import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native'

const placeInput =props=>{
    return(
        <View style={styles.textInputView}>
            <TextInput style={styles.textInput} underlineColorAndroid={"green"}
            value={props.value} onChangeText={props.onChangeText}/>
        </View>
    )
}

const styles = StyleSheet.create({

  textInputView: {
    width: "70%",
  },
  textInput: {
      padding: 8,
      fontSize: 20
  }
})

export default placeInput;