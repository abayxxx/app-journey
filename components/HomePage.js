import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function HomePage(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bgg.png")}
        style={styles.image}
      >
        <Text
          style={{ fontSize: 40, left: 100, marginBottom: 80, color: "grey" }}
        >
          Journey App
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={{ color: "white", fontSize: 15 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={{ color: "white", fontSize: 15 }}>Register</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    justifyContent: "center",
  },
  button: {
    left: 105,
    width: 210,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E86DE",
    marginBottom: 15,
    borderRadius: 50,
  },
});
