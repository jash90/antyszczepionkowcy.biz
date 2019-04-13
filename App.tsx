import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Home from "./src/screens/Home";
import Start from './src/screens/Start';
import EStyleSheet from "react-native-extended-stylesheet";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="start" component={Start} hideNavBar />
          <Scene key="home" component={Home} hideNavBar />
        </Stack>
      </Router>
    );
  }
}
EStyleSheet.build({
  $blue: "#34b6b5",
  $navy: "#001525",
  $red: "#f71735",
  $dateColor:"#f71735"
});
