import LottieView from 'lottie-react-native';
import React, { Component } from 'react';
import {
  Alert,
  Animated,
  Easing,
  Image,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from 'react-native-router-flux';
import Torch from 'react-native-torch';
import TrackPlayer from 'react-native-track-player';
import _ from 'underscore';

import { ButtonDebounce } from '../components/ButtonDebounce';
import { TitleSite } from '../components/TitleSite';
import {
  copyright,
  durationVibration,
  fakeOff,
  fakeOn,
  info,
  isFaked,
  patternVibration,
  pleaseWait,
  racconWebsite,
  startText,
  waterIsFake,
} from '../utils/Const';


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
    this.state.animation.addListener(({ value }) =>
      this.setState({ progress: Number(value) })
    );
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
            style={styles.headerButton}>
            <Image source={{ uri: "raccoon" }} style={styles.image} />
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
          <TouchableOpacity
            onPress={_.debounce(() => Actions.about(), 500, true)}>
            <TitleSite />
          </TouchableOpacity>
        )}

        {progress === 0 && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{startText}</Text>
          </View>
        )}
        <ButtonDebounce
          styleView={styles.button}
          styleText={styles.text}
          text={this.buttonText(progress)}
          value={progress === 0}
          onPress={() => {
            this.fakeStart();
          }}
        />
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
    }, durationVibration);

    Vibration.vibrate(patternVibration, false);
    Animated.timing(animation, {
      toValue: 1,
      duration: durationVibration,
      easing: Easing.linear
    }).start(async () => {
      animation.addListener(async ({ value }) =>
        this.setState({ progress: Number(value) })
      );
      TrackPlayer.stop();
      Alert.alert(
        info,
        waterIsFake,
        [
          {
            text: "OK",
            onPress: () => Actions.promotions()
          }
        ],
        { cancelable: false }
      );
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
  headerText: { color: "white", fontSize: 14, fontFamily: "WorkSans" },
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
