import styled from "styled-components";

export const Original = styled.Image`
  width: 100%;
  aspect-ratio: ${(props) => props.ratio};
`;

export const Component = styled.View`
  marginBottom: 80px;
`;

export const Footer = styled.View`
  display: flex;
  padding: 15px;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
`;

export const Name = styled.Text`
  color: #333;
  fontWeight: bold;
`;