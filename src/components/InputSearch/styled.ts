import styled from 'styled-components';


export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    font-size: 1.2rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 0 1rem;
    margin-top: 2rem;
`;

export const InputStyled = styled.input`
    width: 100%;
    padding: 1rem;
    transition: border 0.3s ease, box-shadow 0.3s ease;
    outline: none;

    &::placeholder {
        color: #888;
    }
`;