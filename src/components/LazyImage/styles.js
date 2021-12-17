import styled from "styled-components";

export const Original = styled.Image`
  width: 100%;
  aspect-ratio: ${(props) => props.ratio};
`;

export const Container = styled.View`
  display: flex;
  flexDirection: column;
  justifyContent: space-around;
  alignItems: center;
`;
