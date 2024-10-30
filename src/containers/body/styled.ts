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
    margin: 0px 7rem;
    width: 100%;
    @media (max-width: 740px) {
        margin: 0px 2rem;
    }
    @media (max-width: 460px) {
        margin: 0px ;
    }

    .github_icon {
        padding-top: 10rem;
        padding-bottom: 5rem;
        margin: 0 auto;
        width: 20rem;
        
        @media (max-width: 740px) {
            padding-top: 5rem;
            padding-bottom: 2rem;
            width: 10rem;
        }
        @media (max-width: 460px) {
            padding-top: 6rem;
            padding-bottom: 3rem;
            width: 6rem;
        }
    }
`;