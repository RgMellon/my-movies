import React from 'react';

import { FiPlay, FiHeart, FiXCircle } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import {
  Container,
  Notifications,
  ContentNotification,
  FavCard,
  Badge,
} from './styles';

import { useLike } from '../../hooks/like';
import { useLikeModal } from '../../hooks/likeModal';

const Header: React.FC = () => {
  const { likes, removeLike } = useLike();
  const { show, isHiden } = useLikeModal();

  return (
    <Container>
      <div>
        <FiPlay size="40" color="#AA3D32" />
        <p> Moovie`s </p>
      </div>

      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/favourites">FAVOURITES</Link>
        </li>
      </ul>

      <ContentNotification>
        <button type="button" onClick={() => show(!isHiden)}>
          <FiHeart size="30" color="#AA3D32" />
        </button>

        {likes.length > 0 && (
          <Badge>
            <span>{likes.length}</span>
          </Badge>
        )}

        {isHiden && (
          <Notifications>
            <section>
              <ul>
                {likes.map(movie => (
                  <FavCard key={movie.id}>
                    <img
                      src={movie.fullPathBackgroundImage}
                      alt={movie.title}
                    />
                    <p>{movie.title}</p>
                    <button type="button" onClick={() => removeLike(movie.id)}>
                      <FiXCircle size="15" color="#AA3D32" />
                    </button>
                  </FavCard>
                ))}
              </ul>
            </section>
          </Notifications>
        )}
      </ContentNotification>
    </Container>
  );
};

export default Header;
