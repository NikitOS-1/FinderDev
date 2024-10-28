import styled from 'styled-components';
import { ThemeType } from '../../redux/slices/themeSlice.ts';
import { darkThemeBox, lightThemeBox } from '../../style/commonStyled.ts';


export const HeaderStyled = styled.div<{ theme: 'light' | 'dark'; }>`
    ${(props) => (props.theme === ThemeType.dark ? darkThemeBox : lightThemeBox)}

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-weight: bold;
        font-size: 1.5rem;
    }
`;