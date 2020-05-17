import React, { useEffect, useState } from 'react';

import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import { Container, CardMovie, ContentMovies } from './styles';

import api, { API_KEY, PATH_IMAGE } from '../../services/api';

import { useLike } from '../../hooks/like';

interface Movie {
  poster_path: string;
  title: string;
  overview: string;
  fullPathBackgroundImage?: string;
  id: number;
  isLiked?: boolean;
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const { addLike, likes, removeLike } = useLike();

  useEffect(() => {
    async function getMovies(): Promise<void> {
      const response = await api.get(
        `/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`,
      );

      const { results } = response.data;

      const resulttWithFullPath = results.map((movie: Movie) => ({
        ...movie,
        fullPathBackgroundImage: `${PATH_IMAGE}/${movie.poster_path}`,
        isLiked: !!likes.find(like => like.id === movie.id),
      }));

      setMovies(resulttWithFullPath);
    }

    getMovies();
  }, [likes]);

  return (
    <>
      <Container>
        <h3> More Movies </h3>

        <ContentMovies>
          {movies.map((movie: Movie) => (
            <CardMovie key={movie.id}>
              <header>
                <img src={movie.fullPathBackgroundImage} alt={movie.title} />
              </header>
              <div>
                <h4>{movie.title}</h4>
                <p>{movie.overview}</p>
              </div>
              <footer>
                {movie.isLiked ? (
                  <button type="button" onClick={() => removeLike(movie.id)}>
                    <FaHeart size="20" color="#AA3D32" />
                  </button>
                ) : (
                  <button type="button" onClick={() => addLike(movie)}>
                    <FiHeart size="20" color="#AA3D32" />
                  </button>
                )}
              </footer>
            </CardMovie>
          ))}
        </ContentMovies>
      </Container>
    </>
  );
};

export default Movies;
