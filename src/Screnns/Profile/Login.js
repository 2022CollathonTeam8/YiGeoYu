import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Input } from "react-native-elements";
const Login = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (isLogin) {
    return (
      <>
        <Text>로그인된 상태입니다.</Text>
        <Button title="Logout" onPress={() => setIsLogin(!isLogin)} />
      </>
    );
  } else {
    return (
      <>
        <View style={styles.Container}>
          <View style={styles.InputBox}>
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
          </View>

          <View style={styles.ButtonBox}>
            <TouchableOpacity
              style={styles.LoginBtn}
              onPress={() => setIsLogin(!isLogin)}
            >
              <Text style={styles.BtnText}>로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.KaKaoBtn}
              // onPress={() => setIsLogin(!isLogin)}
            >
              <Text style={styles.BtnText}>카카오 간편 로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.GoogleBtn}
              // onPress={() => setIsLogin(!isLogin)}
            >
              <Text style={styles.BtnText}>구글 간편 로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.SignUpBtn}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.BtnText}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  InputBox: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ButtonBox: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  BtnText: {
    textAlign: "center",
    fontSize: 15,
    padding: 20,
    fontWeight: "700",
    color: "black",
  },
  LoginBtn: {
    backgroundColor: "skyblue",
    width: 200,
    borderWidth: 3,
    marginBottom: 10,
  },

  KaKaoBtn: {
    backgroundColor: "yellow",
    width: 200,
    borderWidth: 3,
    marginBottom: 10,
  },
  GoogleBtn: {
    backgroundColor: "white",
    width: 200,
    borderWidth: 3,
    marginBottom: 10,
  },

  SignUpBtn: {
    backgroundColor: "green",
    width: 200,
    borderWidth: 3,
  },
});

export default Login;
