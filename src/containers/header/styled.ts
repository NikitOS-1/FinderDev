import styled from 'styled-components';
import { ThemeType } from '../../redux/slices/themeSlice.ts';
import { darkThemeBox, lightThemeBox } from '../../style/commonStyled.ts';


export const HeaderStyled = styled.div<{ theme: 'light' | 'dark'; }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    p {
        font-weight: bold;
        font-size: 20px;
        margin-left: 40px;
    }

    ${(props) => (props.theme === ThemeType.dark ? lightThemeBox : darkThemeBox)}

`;