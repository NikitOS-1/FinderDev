import styled, { css } from 'styled-components';
import { ThemeType } from '../../redux/slices/themeSlice.ts';
import { darkThemeBackground, lightThemeBackground } from '../../style/commonStyled.ts';


export const Wrapper = styled.div<{ theme: 'light' | 'dark' }>`
    ${(props) => css`
        ${props.theme === ThemeType.dark ? darkThemeBackground : lightThemeBackground}
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100vw;
        min-height: 100vh;
        height: 100%;
    `}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: max-content;
    margin: 0 auto;
    max-width: 1800px;
    
    @media (max-width: 1024px) {
        width: 90%;
        height: max-content;
    }

    @media (max-width: 740px) {
        width: 95%;
        height: max-content;
    }
`;