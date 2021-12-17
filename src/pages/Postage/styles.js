import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    padding: 10px;
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
  backgroundColor: rgba(0,0,0,0.5);
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

export const Button = styled.TouchableOpacity`
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
    fontSize: 15px;
    fontWeight: bold;
    color: #2596be;
`;

export const Subtitle = styled.Text`
    fontSize: 13px;
    color: #5f5f5f;
`;

export const Name = styled.Text`
  color: #333;
  fontWeight: bold;
  fontSize: 14px;
`;

export const PostImage = styled.Image`
  width: 100%;
  aspect-ratio: ${(props) => props.aspectRatio};
`;

export const Post = styled.View`
`;

export const Footer = styled.View`
  display: flex;
  padding: 15px;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
`;

export const LikeNShare = styled.View`
  display: flex;
  flexDirection: row;
`;