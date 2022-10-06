import React, { createContext, useContext, useState } from 'react';
interface IModalContext {
  isVisible: boolean;
  toggleModal: () => void;
  handelModalState: (state: 'open' | 'close') => void;
}
/**creation of the context */
export const ModalContext = createContext<IModalContext>({} as IModalContext);
const ModalContextProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const handelModalState = (state: 'open' | 'close') => {
    setIsVisible(state === 'open');
  };
  return (
    <ModalContext.Provider
      value={{
        isVisible,
        toggleModal,
        handelModalState
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): IModalContext => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    console.error('useModalContext must be used within a ModalContextProvider');
  }
  return context;
};

export default ModalContextProvider;
