import { ErrorHandlerStyled } from './styled.ts';


interface ErrorsHandlerPropsI {
  message: string;
}

export const ErrorsHandler = ({ message }: ErrorsHandlerPropsI) => {

  return (
    <ErrorHandlerStyled>{message}</ErrorHandlerStyled>
  );
};