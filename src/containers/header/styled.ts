import styled, { css } from 'styled-components';
import { ThemeType } from '../../redux/slices/themeSlice.ts';


const lightTheme = css`
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(200, 200, 200, 0.8);
    box-shadow: 0 4px 10px rgba(100, 100, 100, 0.3);
`;

const darkTheme = css`
    background-color: rgba(27, 27, 27, 0.8);
    border: 1px solid rgba(46, 46, 46, 0.8);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const HeaderStyled = styled.div<{ theme: 'light' | 'dark' }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem;
    width: 90%;
    padding: 20px;
    border-radius: 8px;
    
    p{
        font-weight: bold;
        font-size: 20px;
        margin-left: 40px;
    }
    ${(props) => (props.theme === ThemeType.dark ? lightTheme : darkTheme)}
`;