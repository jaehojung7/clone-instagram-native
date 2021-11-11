import React from "react";
import styled from "styled-components/native";
import { colors } from "../../colors";

const Button = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 10px 100px;
  width: 100%;
  border-radius: 5px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const ButtonText = styled.Text`
  font-weight: 600;
  text-align: center;
  color: white;
`;

export default function AuthButton({ onPress, disabled, text }) {
  return (
    <Button disabled={false} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
