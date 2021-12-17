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