import styled from 'styled-components/native';
import {Animated} from 'react-native'

export const Container = styled.View`
    flex: 1;
    background: #8B10AE;
  
`;

export const Content = styled.View`
flex: 1;
max-height: 400px;
justify-content: center;
z-index: 5;
`;

export const Card = styled(Animated.View)`
flex: 1;
background: #fff;
margin: 0 20px;
height: 100%;
position: absolute;
left: 0;
right: 0;
top: 0px;

`;

export const CardHeader = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 30px`;

export const CardContent = styled.View`
flex: 1;
padding: 0 30px;
justify-content: center`;


export const CardFooter= styled.View`
padding: 30px;
background: #eee;
border-radius: 4px;
`;
export const Title = styled.Text`
font-size: 13px;
color: #999`;

export const Description = styled.Text`
font-size: 32px;
margin-top: 3px;
color: #333`;

export const Annotation = styled.Text`
font-size: 12px;
color: #333`;
