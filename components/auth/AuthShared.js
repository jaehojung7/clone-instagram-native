import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  padding: 15px 7px;
  border-radius: 4px;
  margin-bottom: ${(props) => (props.lastOne ? "15" : 8)}px;
`;