import React from "react";
import { StyleSheet, View, ToastAndroid } from "react-native";
import AddButton from "./components/addButton";
import PlaceInput from "./components/textInput";
import List from "./components/list";
//import placeImage from "./assets/beautiful-place.jpg";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      place: {
        name: "",
        image: {
          uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        }
      },
      places: []
    };
  }

  onTextChange = value => {
    let place = this.state.place;
    place.name = value;
    this.setState({
      place
    });
  };

  onAddClick = () => {
    if(this.state.place.name=="") return;
    const places=this.state.places;
    const place = { name: "", image:  {
      uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    } };
    places.push({...this.state.place})
    this.setState({
      place,
      places
    })
   console.log(this.state)
   
  //   let place = { name: "", image: placeImage };
  //   this.setState(prevState => {
  //     return {
  //       place,
  //       places: prevState.places.concat(prevState.place)
  //     };
  //   });
  };

  onListPressed = (index) => {

    let places = this.state.places;
    places.splice(index,1);
    this.setState({
      places
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <PlaceInput
            value={this.state.place.name}
            onChangeText={this.onTextChange}
          />
          <AddButton onPress={()=>this.onAddClick()} />
        </View>
        <List placesList={this.state.places} onclick={this.onListPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },
  inputContainer: {
    flexDirection: "row"
  }
});
