import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

const CreateAccount = styled.Text`
  font-weight: 600;
  margin-top: 13px;
  color: ${colors.blue};
`;

export default function Welcome({ navigation }) {
  const goToLogIn = () => navigation.navigate("LogIn");
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  return (
    <AuthLayout>
      <AuthButton text="Login" disbaled={false} onPress={goToLogIn} />
      <TouchableOpacity onPress={goToCreateAccount}>
        <CreateAccount>Sign up</CreateAccount>
      </TouchableOpacity>
    </AuthLayout>
  );
}
