import styled from 'styled-components';
import { ThemeType } from '../../redux/slices/themeSlice.ts';
import { darkThemeBox, lightThemeBox } from '../../style/commonStyled.ts';


export const BodyStyled = styled.div<{ theme: 'light' | 'dark'; }>`
    display: flex;
    padding: 20px;

    ${(props) => (props.theme === ThemeType.dark ? lightThemeBox : darkThemeBox)}

`;