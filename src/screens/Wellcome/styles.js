import styled from 'styled-components';
import { primaryColor } from "../../util/colors";

export const Container = styled.SafeAreaView`
    flex: 1;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: ${primaryColor};
`;