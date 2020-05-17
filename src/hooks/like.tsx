import React, { createContext, useCallback, useContext, useState } from 'react';

interface LikeContextData {
  addLike(movie: LikeMovie): void;
  removeLike(id: number): void;
  likes: LikeMovie[];
}

interface LikeMovie {
  poster_path: string;
  title: string;
  overview: string;
  fullPathBackgroundImage?: string;
  id: number;
}

const Like = createContext<LikeContextData>({} as LikeContextData);

const LikeProvider: React.FC = ({ children }) => {
  const [likeMovies, setLikeMovies] = useState<LikeMovie[]>(() => {
    const moviesLiked = localStorage.getItem('@Moovies:likes');

    if (moviesLiked) {
      return JSON.parse(moviesLiked);
    }

    return [];
  });

  const addLike = useCallback(
    ({
      poster_path,
      title,
      overview,
      fullPathBackgroundImage,
      id,
    }: LikeMovie) => {
      const formatedMovie = {
        poster_path,
        title,
        overview,
        fullPathBackgroundImage,
        id,
      };

      const likedMovies = [...likeMovies, formatedMovie];

      setLikeMovies(likedMovies);

      localStorage.setItem('@Moovies:likes', JSON.stringify(likedMovies));
    },
    [likeMovies],
  );

  const removeLike = useCallback(
    (id: number) => {
      const listWithRemovedMovie = likeMovies.filter(movie => movie.id !== id);
      setLikeMovies(listWithRemovedMovie);
      localStorage.setItem(
        '@Moovies:likes',
        JSON.stringify(listWithRemovedMovie),
      );
    },
    [likeMovies],
  );

  return (
    <Like.Provider value={{ addLike, removeLike, likes: likeMovies }}>
      {children}
    </Like.Provider>
  );
};

function useLike(): LikeContextData {
  const context = useContext(Like);

  if (!context) {
    throw Error('useLike must be used within an LikeProvider');
  }

  return context;
}

export { LikeProvider, useLike };
