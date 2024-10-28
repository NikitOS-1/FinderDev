import styled, { css } from 'styled-components';
import { ThemeType } from '../../redux/slices/themeSlice.ts';
import { darkThemeBackground, lightThemeBackground } from '../../style/commonStyled.ts';


export const Wrapper = styled.div<{ theme: 'light' | 'dark' }>`
    ${(props) => css`
        ${props.theme === ThemeType.dark ? lightThemeBackground : darkThemeBackground}
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100vw;
        height: 100vh;
    `}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
`;