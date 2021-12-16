import styled from "styled-components/native";

export const Post = styled.View`
    margin-top: 10px;
`;

export const Header = styled.View`
    padding: 15px;
    flex-direction: row;
    align-items: center;
`;

export const Name = styled.Text`
    color: #333;
    font-weight: bold;
`;

export const PostImage = styled.Image`
    width: 100%;
    aspect-ratio: ${props => props.ratio};
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999'
})`
    margin: 30px 0;
`;