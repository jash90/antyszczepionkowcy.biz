import React, { Component } from "react";
import { Router, Stack, Scene, Actions } from "react-native-router-flux";
import Promotions from "./src/screens/Promotions";
import Start from "./src/screens/Start";
import About from "./src/screens/About";
import EStyleSheet from "react-native-extended-stylesheet";
import { BackHandler } from "react-native";
export default class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => this.onBack());
  }

  onBack() {
    if (Actions.currentScene === "promotions"){
      Actions.reset("start");
    }else{
      BackHandler.exitApp();
    }
  }

  componentWillMount() {
    BackHandler.removeEventListener("hardwareBackPress", () => this.onBack());
  }
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="start" component={Start} hideNavBar />
          <Scene key="promotions" component={Promotions} hideNavBar />
          <Scene key="about" component={About} hideNavBar />
        </Stack>
      </Router>
    );
  }
}
EStyleSheet.build({
  $blue: "#34b6b5",
  $navy: "#001525",
  $red: "#f71735"
});
