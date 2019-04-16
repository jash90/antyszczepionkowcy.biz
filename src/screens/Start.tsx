import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Animated,
  Easing,
  Alert,
  Vibration,
  Image,
  BackHandler
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import LottieView from "lottie-react-native";
import { Actions } from "react-native-router-flux";
import {
  DurationVibration,
  info,
  waterIsFake,
  racconWebsite,
  isFaked,
  fakeOff,
  fakeOn,
  copyright,
  pleaseWait,
  startText,
  PatternVibration
} from "../utils/Const";
import Torch from "react-native-torch";
import TrackPlayer from "react-native-track-player";
interface Props {}
interface State {
  animation: Animated.Value;
  progress: number;
}
export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
      progress: 0
    };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => this.onBack());
    this.state.animation.addListener(({ value }) =>
      this.setState({ progress: Number(value) })
    );
  }

  onBack() {
    BackHandler.exitApp();
    return true;
  }

  componentWillMount() {
    BackHandler.removeEventListener("hardwareBackPress", () => this.onBack());
  }

  render() {
    const { progress, animation } = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              this.onPressHeader();
            }}
            style={styles.headerButton}
          >
            <Image
              source={require("../../assets/images/logo-only-icon.png")}
              style={styles.image}
            />
            <Text style={styles.headerText}>{copyright}</Text>
          </TouchableOpacity>
        </View>
        {progress > 0 && (
          <LottieView
            source={require("../../assets/animations/loading.json")}
            progress={animation}
            autoSize
          />
        )}
        {progress > 0 && (
          <View style={styles.progressAnimation}>
            <Text style={styles.progressText}>
              {(progress * 100).toFixed(0) + "%"}
            </Text>
          </View>
        )}

        {progress === 0 && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{startText}</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.fakeStart();
          }}
        >
          <Text style={styles.text}>{this.buttonText(progress)}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  fakeStart = async () => {
    const { animation } = this.state;
    TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.add({
        id: "trackId",
        url: require("../../assets/music/alarm.mp3"),
        title: isFaked,
        artist: pleaseWait
      });
      TrackPlayer.play();
    });
    Torch.switchState(true);

    setTimeout(() => {
      Torch.switchState(false);
    }, DurationVibration);

    Vibration.vibrate(PatternVibration, false);
    Animated.timing(animation, {
      toValue: 1,
      duration: DurationVibration,
      easing: Easing.linear
    }).start(async () => {
      animation.addListener(async ({ value }) =>
        this.setState({ progress: Number(value) })
      );
      TrackPlayer.stop();
      Alert.alert(info, waterIsFake, [
        {
          text: "OK",
          onPress: () => Actions.promotions()
        }
      ]);
    });
  };

  onPressHeader() {
    Linking.openURL(racconWebsite);
  }

  buttonText(progress: number): string {
    if (progress > 0) {
      return isFaked;
    } else if (progress === 1) {
      return fakeOn;
    } else {
      return fakeOff;
    }
  }
}

const styles = EStyleSheet.create({
  description: {
    fontSize: 20,
    color: "white",
    textAlign: "justify",
    fontFamily: "WorkSans"
  },
  descriptionContainer: { padding: 10 },
  headerButton: { flexDirection: "row", alignItems: "center" },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    fontFamily: "WorkSans"
  },
  button: {
    backgroundColor: "$blue",
    width: "85%",
    height: 70,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  progressText: { color: "white", fontSize: 40, fontFamily: "WorkSans" },
  progressAnimation: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 200
  },
  headerText: { color: "white", fontSize: 16, fontFamily: "WorkSans" },
  image: { width: 50, height: 50 },
  header: { flex: 1, width: "100%", justifyContent: "flex-start" },
  safeArea: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "$navy",
    padding: 10
  }
});
