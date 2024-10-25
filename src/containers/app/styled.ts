import styled, { css } from 'styled-components';
import { ThemeType } from '../../redux/slices/themeSlice.ts';

const lightTheme = css`
    background: linear-gradient(135deg, #ffafbd, #ffc3a0); 
    color: #000; 
`;

const darkTheme = css`
    background: linear-gradient(135deg, #6a11cb, #2575fc); 
    color: #fff;
`;

export const Container = styled.div<{ theme: 'light' | 'dark' }>`
    ${(props) => css`
        ${props.theme === ThemeType.dark ? lightTheme : darkTheme}
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    `}
`;