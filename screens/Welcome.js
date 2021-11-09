import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 150px;
`;

const Login = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 10px 100px;
  border-radius: 5px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const LoginText = styled.Text`
  font-weight: 600;
  font-size: 17px;
  color: white;
`;

const CreateAccount = styled.Text`
  font-weight: 600;
  margin-top: 13px;
  color: ${colors.blue};
`;

export default function Welcome({ navigation }) {
  const goToLogIn = () => navigation.navigate("LogIn");
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/logo.png")} />
      <Login disabled={true} onPress={goToLogIn}>
        <LoginText>Login</LoginText>
      </Login>
      <TouchableOpacity onPress={goToCreateAccount}>
        <CreateAccount>Sign up</CreateAccount>
      </TouchableOpacity>
    </Container>
  );
}
