import React, { useEffect, useState } from 'react';

import { FiHeart } from 'react-icons/fi';

import Carousel from 'react-multi-carousel';
import { Container, Card } from './styles';

import api, { API_KEY, PATH_IMAGE } from '../../services/api';

import 'react-multi-carousel/lib/styles.css';

interface TrendingMovie {
  poster_path: string;
  backgroundFullPath?: string;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TrendingMovies: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<TrendingMovie[]>([]);

  useEffect(() => {
    async function getRatedMovies(): Promise<void> {
      const response = await api.get(
        `movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`,
      );

      const { results } = response.data;

      const formatedMovies = results.map((movie: TrendingMovie) => ({
        ...movie,
        backgroundFullPath: `${PATH_IMAGE}/${movie.poster_path}`,
      }));

      setTrendingMovies(formatedMovies);
    }

    getRatedMovies();
  }, []);

  return (
    <Container>
      <h3> #TrendingMovies </h3>

      {/* <ContentCard> */}
      <Carousel responsive={responsive}>
        {trendingMovies.map((movie: TrendingMovie) => (
          <Card backgroundImage={movie.backgroundFullPath}>
            <footer>
              <p> Favoritar </p>
              <button type="button">
                <FiHeart size="20" color="#AA3D32" />
              </button>
            </footer>
          </Card>
        ))}
      </Carousel>
      {/* </ContentCard> */}
    </Container>
  );
};

export default TrendingMovies;
