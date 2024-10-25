import styled from 'styled-components';

export const ThemeSwitcherStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 70px;
    margin: 5px;
    padding: 8px;

    span {
        margin-right: 10px;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    div {
        cursor: pointer;
    }
`;