import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons name="weather-sunny" size={96} color="black" />
            <Text>{temp}º</Text>      
        </View>

        <View style={styles.halfContainer}>

        </View>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:42
    }
})