import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={{ fontSize: 40, marginBottom: 60 }}>LOGIN</Text>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          //   onChangeText={text => onChangeText(text)}
          //   value={value}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          //   onChangeText={text => onChangeText(text)}
          //   value={value}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("List")}
        >
          <Text style={{ color: "white", fontSize: 15 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
          <Text style={{ marginTop: 10 }}>
            Not have account yet ? Register Here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  button: {
    width: 210,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E86DE",
    marginTop: 35,
    borderRadius: 50,
  },
  input: {
    width: "70%",
    height: 50,
    borderColor: "#2E86DE",
    borderWidth: 4,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  loginContainer: {
    width: "80%",
    height: "80%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
