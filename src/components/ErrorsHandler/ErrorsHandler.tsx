import { ErrorHandlerStyled } from './styled';


interface ErrorsHandlerPropsI {
  message: string;
}

export const ErrorsHandler = ({ message }: ErrorsHandlerPropsI) => {

  return (
    <ErrorHandlerStyled>{message}</ErrorHandlerStyled>
  );
};