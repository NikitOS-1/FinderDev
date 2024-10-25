import Header from '../header/Header.tsx';
import Body from '../body/Body.tsx';
import Footer from '../footer/Footer.tsx';
import { Container } from './app.styled.ts';
import { useEffect } from 'react';
import '../../commons/styles/rootStyle.scss';

function App() {
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
    fetchGitHubData('https://api.github.com/users/NikitOS-1');
  }, []);

  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;
