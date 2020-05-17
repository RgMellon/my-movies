import React from 'react';

import { LikeProvider } from './like';
import { LikeModalProvider } from './likeModal';

const AppProvider: React.FC = ({ children }) => (
  <LikeProvider>
    <LikeModalProvider>{children}</LikeModalProvider>
  </LikeProvider>
);

export default AppProvider;
