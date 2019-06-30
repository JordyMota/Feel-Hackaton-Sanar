import styled from 'styled-components';
import { StyleSheet } from "react-native";

export const BtnContainer = styled.View`
    margin-bottom: 12px;
    margin-right: 8px;
`;

export const Container = styled.TouchableOpacity`
    padding: 4px 6px;
    background-color: ${props => props.active ? '#222' : '#fff'};
    border-radius: 4px;
    elevation: 2;
`;

export const Content = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.active ? '#fff' : '#222'};
`;