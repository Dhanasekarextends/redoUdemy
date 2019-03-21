import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const addButton =props=>{
    return(
        <View style={styles.addButtonView}>
            <Button style={styles.addButton} title="add" onPress={props.onPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    addButtonView: {
        width: "30%",
        paddingLeft: 10,
    },
    addButton: {
        fontSize: 20
    }
});

export default addButton;