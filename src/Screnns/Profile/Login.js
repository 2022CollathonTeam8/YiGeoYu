import React from "react";
import { View, Text, Button } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login page</Text>
      <Button
        title="go profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default Login;
