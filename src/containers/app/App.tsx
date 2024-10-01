import Header from '../header/Header.tsx';
import Body from '../body/Body.tsx';
import Footer from '../footer/Footer.tsx';
import { Container } from './app.styled.ts';

function App() {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;
