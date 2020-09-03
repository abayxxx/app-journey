import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Register(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={{ fontSize: 40, marginBottom: 30, marginTop: 30 }}>
            REGISTER
          </Text>
          <Text style={styles.text}>Full Name</Text>
          <TextInput
            style={styles.input}
            //   onChangeText={text => onChangeText(text)}
            //   value={value}
          />
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
          <Text style={styles.text}>No. Hp</Text>
          <TextInput
            style={styles.input}
            //   onChangeText={text => onChangeText(text)}
            //   value={value}
          />
          <Text style={styles.text}>Alamat</Text>
          <TextInput
            style={styles.input}
            //   onChangeText={text => onChangeText(text)}
            //   value={value}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontSize: 15 }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 50,
  },
  input: {
    width: "70%",
    height: 40,
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
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: 30,
    // marginTop: 30,
  },
});
