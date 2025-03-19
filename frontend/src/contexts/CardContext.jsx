import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const CardContext = createContext();

// Proveedor del contexto
export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  );
};

// Hook para consumir el contexto
export const useCards = () => {
  return useContext(CardContext);
};
