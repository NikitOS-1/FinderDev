import styled from 'styled-components';
import { darkThemeBox, lightThemeBox } from '../../style/commonStyled.ts';
import { ThemeType } from '../../redux/slices/themeSlice.ts';

export const Styled = styled.div<{ theme: 'light' | 'dark'; }>`
    ${(props) => (props.theme === ThemeType.dark ? darkThemeBox : lightThemeBox)}

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
`;