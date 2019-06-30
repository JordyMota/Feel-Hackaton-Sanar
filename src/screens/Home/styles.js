import styled from 'styled-components';
import { primaryColor } from "../../util/colors";

export const Container = styled.SafeAreaView`
    flex: 1;
    position: relative;
    background-color: ${primaryColor};
`;

export const FrontView = styled.View`
    flex: 1;
    width: 100%;
    height: 90%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-right-radius: 100px;
    background-color: ${primaryColor};
`;