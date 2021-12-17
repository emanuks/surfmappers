import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-evenly;
    alignItems: center;
    paddingTop: 10px;
    paddingBottom: 10px;
    border: 0px solid #ccc;
    borderBottomWidth: 1px;
`;

export const ButtonContainer = styled.TouchableOpacity`
    padding: 5px;
    borderRadius: 10px;
    backgroundColor: ${props => props.bgColor};
`;

export const CenteredView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  marginTop: 22px;
`;

export const ModalView = styled.View`
  margin: 20px;
  backgroundColor: #f5f5f5;
  borderRadius: 20px;
  padding: 30px;
  shadowColor: #000;
  shadowOpacity: 0.25;
  shadowRadius: 4px;
  elevation: 5;
`;

export const Button = styled.Pressable`
  borderRadius: 20px;
  padding: 8px;
  elevation: 2;
  marginTop: 10px;
  backgroundColor: #2596be;
`;

export const TextStyle = styled.Text`
  color: white;
  fontWeight: bold;
  textAlign: center;
`;

export const Label = styled.Text`
  fontWeight: bold;
  textAlign: left;
  color: #333;
  fontSize: 16px;
`;

export const TitleView = styled.View`
    display: flex; 
    flexDirection: column;
`;

export const Title = styled.Text`
    fontSize: 13px;
    fontWeight: bold;
    color: #2596be;
`;

export const Subtitle = styled.Text`
    fontSize: 12px;
    color: #5f5f5f;
`;
