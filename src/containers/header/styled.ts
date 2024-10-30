import styled from 'styled-components';
import { ThemeType } from '../../redux/slices/themeSlice';
import { darkThemeBox, lightThemeBox } from '../../style/commonStyled';


export const HeaderStyled = styled.div<{ theme: 'light' | 'dark'; }>`
    ${(props) => (props.theme === ThemeType.dark ? darkThemeBox : lightThemeBox)}

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        margin-left: 3rem;
        font-family: "Press_Start_2P", sans-serif;
        font-weight: bold;
        font-size: 1.3rem;
    }

    @media (max-width: 460px) {
        p {
            margin-left: 0rem;
            font-size: 0.8rem;
        }
    }
`;