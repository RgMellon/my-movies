import React from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import TrendingMovies from '../../components/TrendingMovies';
import Movies from '../../components/Movies';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <TrendingMovies />
        <Movies />
      </Container>
    </>
  );
};

export default Home;
