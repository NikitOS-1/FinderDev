import Header from '../header/Header.tsx';
import Body from '../body/Body.tsx';
import Footer from '../footer/Footer.tsx';
import { Container, Wrapper } from './styled.ts';
import { useAppSelector } from '../../redux/helpers.ts';

function App() {
  const theme = useAppSelector((store) => store.theme.mainTheme);

  return (
    <Wrapper theme={theme}>
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default App;
