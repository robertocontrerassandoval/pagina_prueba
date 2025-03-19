import React from 'react';
import { useCards } from '../contexts/CardContext';  // Importamos el contexto
import Card from '../components/Card';  // Importamos el componente Card

const Home = () => {
  const { cards } = useCards();  // Obtener las cards del contexto

  return (
    <div className="home">
      <h1>Cards Generadas</h1>
      <div className="card-container">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))
        ) : (
          <p>No hay cards generadas.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
