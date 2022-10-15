import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";

const SignUP = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <View style={styles.Container}>
        <Input
          placeholder="Enter your name"
          label="Name"
          leftIcon={{ type: "material", name: "badge" }}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Enter your email"
          label="Email"
          leftIcon={{ type: "material", name: "email" }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Enter your password"
          label="Password"
          leftIcon={{ type: "material", name: "lock" }}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.SignUpBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.BtnText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
  },
  BtnText: {
    textAlign: "center",
    fontSize: 15,
    padding: 20,
    fontWeight: "700",
    color: "black",
  },
  SignUpBtn: {
    backgroundColor: "skyblue",
    width: 200,
    borderWidth: 3,
    marginBottom: 10,
  },
});

export default SignUP;
