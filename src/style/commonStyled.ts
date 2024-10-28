import { css } from 'styled-components';

export const lightThemeBackground = css`
    background: linear-gradient(135deg, #ffafbd, #ffc3a0);
    color: #000;
`;

export const darkThemeBackground = css`
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: #fff;
`;

export const lightThemeBox = css`
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(200, 200, 200, 0.8);
    box-shadow: 0 4px 10px rgba(100, 100, 100, 0.3);
    border-radius: 10px;
    padding: 1rem;
`;

export const darkThemeBox = css`
    background-color: rgba(27, 27, 27, 0.8);
    border: 1px solid rgba(46, 46, 46, 0.8);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 1rem;
`;

