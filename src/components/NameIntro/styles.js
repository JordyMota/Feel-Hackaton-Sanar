import styled from 'styled-components';
import { StyleSheet } from "react-native";

export const Container = styled.KeyboardAvoidingView`
    width: 85%;
    position: absolute;
    ${props => props.active ? '' : 'left: -100%'};
`;

export const MainContainer = styled.View`
    width: 100%;
    position: relative;
    align-items: center;
`;

export const Descript = styled.Text`
    font-size: ${props => props.body ? '15' : '18'}px;
    color: #fff;
`;

export const Title = styled(Descript)`
    font-size: 20px;
    font-weight: bold;
`;

export const TextContainer = styled.View`
    width: 100%;
`;

export const SelectDate = styled.Picker`
    width: ${props => props.small ? '25%' : '33%'};
    height: 55px;
    color: #fff;
`;

export const SelectDateContainer = styled.Picker`
    width: 80%;
    min-width: 80%;
`;

export const NameInput = styled.TextInput`
    margin-top: 12%;
    color: #fff;
    width: 80%;
    min-width: 80%;
    border-bottom-color: #fff;
    border-bottom-width: 1px;
    font-size: 16px;
    padding: 4px 6px;
`;

export const BtnContinueContainer = styled.View`
    width: 90%;
    min-width: 90%;
    margin-top: 16%;
    position: relative;
`;

export const BtnContinue = styled.TouchableOpacity`
    padding: 15px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 6px;
    width: 100%;
    min-width: 100%;
    elevation: 3;
`;

export const TextBtnContinue = styled.Text`
    font-size: 21px;
    font-weight: bold;
    color: #222;
`;