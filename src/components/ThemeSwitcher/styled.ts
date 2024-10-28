import styled from 'styled-components';

export const ThemeSwitcherStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 100px;
    margin: 0.5rem;
    padding: 0.5rem;

    span {
        &::first-letter {
            text-transform: uppercase;
        }
    }

    div {
        cursor: pointer;
    }
`;