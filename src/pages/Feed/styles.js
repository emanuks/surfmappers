import styled from "styled-components/native";

export const Post = styled.View`
    border: 0px solid #ccc;
    borderBottomWidth: 1px;
`;

export const Header = styled.View`
    padding: 15px;
    flex-direction: row;
    align-items: center;
`;

export const Link = styled.TouchableOpacity`
    padding: 5px;
    borderRadius: 10px;
`;

export const LinkText = styled.Text`
    color: blue;
    font-weight: bold;
`

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999'
})`
    margin: 30px 0;
`;

export const SearchBox = styled.TextInput`
    alignSelf: center;
    width: 80%;
    height: 50px;
    padding: 6px 12px;
    font-size: 16px;
    color: #555;
    backgroundColor: #fff;
    border: 1px solid #ccc;
    borderRadius: 4px;
`;

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

export const LinkSubtitle = styled.Text`
    color: #5f5f5f;
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
  backgroundColor: white;
  borderRadius: 20px;
  padding: 35px;
  alignItems: center;
  shadowColor: #000;
  shadowOpacity: 0.25;
  shadowRadius: 4px;
  elevation: 5;
`;

export const Button = styled.Pressable`
  borderRadius: 20px;
  padding: 10px;
  elevation: 2;
  backgroundColor: #2196F3;
`;

export const TextStyle = styled.Text`
  color: white;
  fontWeight: bold;
  textAlign: center;
`;

export const ModalText = styled.Text`
  marginBottom: 15px;
  textAlign: center;
`;
