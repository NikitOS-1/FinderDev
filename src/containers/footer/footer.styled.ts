import styled from 'styled-components';
import { darkThemeBox, lightThemeBox } from '../../style/commonStyled.ts';
import { ThemeType } from '../../redux/slices/themeSlice.ts';

export const FooterStyled = styled.div<{ theme: 'light' | 'dark'; }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    p {
        font-weight: bold;
        font-size: 20px;
        margin-left: 40px;
    }

    ${(props) => (props.theme === ThemeType.dark ? lightThemeBox : darkThemeBox)}
`