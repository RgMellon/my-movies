import React, { createContext, useState, useCallback, useContext } from 'react';

interface LikeModalContext {
  show(hidden: boolean): void;
  isHiden: boolean;
}

const LikeModal = createContext<LikeModalContext>({} as LikeModalContext);

const LikeModalProvider: React.FC = ({ children }) => {
  const [isHiden, setIsHiden] = useState(false);

  const show = useCallback(boolean => {
    setIsHiden(boolean);
  }, []);

  return (
    <LikeModal.Provider value={{ show, isHiden }}>
      {children}
    </LikeModal.Provider>
  );
};

function useLikeModal(): LikeModalContext {
  const context = useContext(LikeModal);

  if (!context) {
    throw Error('useLikeModal must be used within an LikeProvider');
  }

  return context;
}

export { LikeModalProvider, useLikeModal };
