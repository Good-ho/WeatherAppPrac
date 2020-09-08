import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import * as Location from "expo-location";
import Loading from "./Loading";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "3284224d113c05984cb203fb2e55fb8f";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getPermisssion = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      console.log("permission error");
    }
  };

  getLocation = async () => {
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});
    console.log(latitude, longitude);
    // send to API and get Weather.
    this.getWeather(latitude, longitude);
  };

  getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      temp : data.main.temp,
      condition: data.weather[0].main
    });

    console.log(data);
  };

  componentDidMount() {
    try {
      // throw Error();
      this.getPermisssion();
      this.getLocation();
    } catch (error) {
      Alert.alert("Can't find you", "so sad");
    }
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
