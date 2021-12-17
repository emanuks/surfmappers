import styled from "styled-components";

export const Original = styled.Image`
  width: 100%;
  aspect-ratio: ${(props) => props.ratio};
`;

export const Component = styled.View`
  marginBottom: 100px;
`;
