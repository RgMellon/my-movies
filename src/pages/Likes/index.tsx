import React from 'react';

import { FaHeart } from 'react-icons/fa';
import Header from '../../components/Header';

import { Container, ContentMovies, CardMovie } from './styles';

import { useLike } from '../../hooks/like';

interface Like {
  poster_path: string;
  title: string;
  overview: string;
  fullPathBackgroundImage?: string;
  id: number;
}

const Likes: React.FC = () => {
  const { likes, removeLike } = useLike();

  return (
    <>
      <Header />

      <Container>
        <h3> Meus Favoritos </h3>

        <ContentMovies>
          {likes.map((movie: Like) => (
            <CardMovie key={movie.id}>
              <header>
                <img src={movie.fullPathBackgroundImage} alt={movie.title} />
              </header>
              <div>
                <h4>{movie.title}</h4>
                <p>{movie.overview}</p>
              </div>
              <footer>
                <button type="button" onClick={() => removeLike(movie.id)}>
                  <FaHeart size="20" color="#AA3D32" />
                </button>
              </footer>
            </CardMovie>
          ))}
        </ContentMovies>
      </Container>
    </>
  );
};

export default Likes;
