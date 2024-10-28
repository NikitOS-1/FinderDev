import Header from '../header/Header.tsx';
import Body from '../body/Body.tsx';
import Footer from '../footer/Footer.tsx';
import { Container, Wrapper } from './styled.ts';
import { useEffect } from 'react';
import { useAppSelector } from '../../redux/helpers.ts';

function App() {
  const theme = useAppSelector((store) => store.theme.mainTheme);

  const fetchGitHubData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchGitHubData('https://api.github.com/users/Michey85');
  }, []);

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
