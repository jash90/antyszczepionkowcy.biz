import React, { Component } from "react";
import { Router, Stack, Scene, Actions } from "react-native-router-flux";
import Promotions from "./src/screens/Promotions";
import Start from "./src/screens/Start";
import EStyleSheet from "react-native-extended-stylesheet";
import { BackHandler } from "react-native";
import firebase from "react-native-firebase";
import PushNotification from "react-native-push-notification";
export default class App extends Component {
  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => this.onBack());
    try {
      PushNotification.configure({
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: (token: any) => {
          console.log("TOKEN:", token);
        },

        // (required) Called when a remote or local notification is opened or received
        onNotification: (notification: any) => {
          console.log("NOTIFICATION:", notification);

          // process the notification
        },
      });
      const channel = new firebase.notifications.Android.Channel(
        "raccoonsoftware",
        "Test Channel",
        firebase.notifications.Android.Importance.Max
      ).setDescription("My apps test channel");

      const notificationOpen = await firebase
        .notifications()
        .getInitialNotification();
      if (notificationOpen) {
        // App was opened by a notification
        // Get the action triggered by the notification being opened
        const action = notificationOpen.action;
        // Get information about the notification that was opened
        const notification = notificationOpen.notification;
        console.log("open");
      }

      // Create the channel
      firebase.notifications().android.createChannel(channel);
      const fcmToken = await firebase.messaging().getToken();
      console.log(fcmToken);
      if (fcmToken) {
        const enabled = await firebase.messaging().hasPermission();
        console.log("enable");
        if (enabled) {
          console.log("permission");
          await firebase.messaging().requestPermission();
          firebase.notifications().onNotificationDisplayed(notification => {
            console.log(notification);
            // Process your notification as required
            // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
          });
          firebase.notifications().onNotification(notification => {
            // Process your notification as required
            console.log(notification);

            PushNotification.localNotification({
              /* Android Only Properties */
              ticker: "My Notification Ticker", // (optional)
              autoCancel: false, // (optional) default: true
              largeIcon: "", // (optional) default: "ic_launcher"
              smallIcon: "drawable/ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher" // (optional) default: none
              color: "white", // (optional) default: system default
              vibrate: true, // (optional) default: true
              priority: "high", // (optional) set notification priority, default: high
              visibility: "private", // (optional) set notification visibility, default: private
              importance: "high", // (optional) set notification importance, default: high
        
              /* iOS and Android properties */
              title: "My Notification Title", // (optional)
              message: "My Notification Message", // (required)
              soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
            });
          });
          firebase.notifications().onNotificationOpened(notificationOpen => {
            // Get the action triggered by the notification being opened
            const action = notificationOpen.action;
            // Get information about the notification that was opened
            // const notification = notificationOpen.notification;

            console.log("open");
          });
        } else {
          // user doesn't have permission
        }
      } else {
        // user doesn't have a device token yet
      }
    } catch (error) {
      console.log(error);
    }
  }

  onBack() {
    if (Actions.currentScene === "promotions") {
      Actions.reset("start");
    } else {
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
