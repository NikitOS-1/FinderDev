import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import { Container, Wrapper } from './styled';
import { useAppSelector } from '../../redux/helpers';

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
