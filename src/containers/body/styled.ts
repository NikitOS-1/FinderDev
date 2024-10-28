import styled from 'styled-components';
import { ThemeType } from '../../redux/slices/themeSlice.ts';
import { darkThemeBox, lightThemeBox } from '../../style/commonStyled.ts';


export const BodyStyled = styled.div<{ theme: 'light' | 'dark'; }>`
    ${(props) => (props.theme === ThemeType.dark ? darkThemeBox : lightThemeBox)}

    display: flex;
    height: 100%;
    margin: 1rem 0px;
`;

export const ContentWrapper = styled.div`
    margin: 0px 2rem;
    width: 100%;
`;