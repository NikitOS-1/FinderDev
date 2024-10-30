// @ts-ignore
import SearchIcon from '../../assets/search_icon.svg?react';
import { InputStyled, SearchContainer } from './styled';

interface InputSearchPropsI {
  value: string;
  onChange: (value: string) => void;
}

export const InputSearch = ({ value, onChange }: InputSearchPropsI) => {

  return (
    <SearchContainer>
      <InputStyled
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search people from GitHub..."
      />
      <SearchIcon />
    </SearchContainer>
  );
};