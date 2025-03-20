import React, { useEffect, useState } from 'react';
import { useCards } from '../contexts/CardContext';  // Importamos el contexto
import Card from '../components/Card';  // Importamos el componente Card
import axios from 'axios';  // Importamos axios para hacer la solicitud HTTP

const Home = () => {
  const { cards } = useCards();  // Obtener las cards del contexto
  const [posts, setPosts] = useState([]);  // Estado para almacenar los posts obtenidos de la API
  const [loading, setLoading] = useState(true);  // Estado para manejar la carga de los posts
  const [error, setError] = useState(null);  // Estado para manejar errores

  // Estado para almacenar los datos del clima
  const [weather, setWeather] = useState(null);  // Estado para el clima
  const [city, setCity] = useState('Madrid');  // Estado para la ciudad
  const [weatherLoading, setWeatherLoading] = useState(true);  // Estado de carga del clima
  const [weatherError, setWeatherError] = useState(null);  // Estado para el error del clima

  // API Key de OpenWeatherMap
  const apiKey = 'tu_api_key';  // Reemplaza con tu propia API Key

  // Realizamos la solicitud de la API para obtener el clima
  useEffect(() => {
    const fetchWeather = async () => {
      setWeatherLoading(true);  // Iniciamos el estado de carga
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);  // Guardamos los datos del clima
      } catch (error) {
        setWeatherError('Error al obtener los datos del clima');
      } finally {
        setWeatherLoading(false);  // Terminamos el estado de carga
      }
    };

    fetchWeather();  // Llamamos a la función para obtener el clima
  }, [city]);  // Repetimos la solicitud cada vez que la ciudad cambie

  // Realizamos la solicitud de la API para obtener los posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('No se pudieron obtener los datos');
        }
        const data = await response.json();
        setPosts(data);  // Guardamos los posts en el estado
      } catch (error) {
        setError(error.message);  // Si hay un error, lo guardamos en el estado
      } finally {
        setLoading(false);  // Terminamos el estado de carga
      }
    };

    fetchPosts();  // Llamamos a la función para obtener los posts
  }, []);

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

     

      <h2>Clima Actual en {city}</h2>
      <div className="weather-container">
        {weatherLoading ? (
          <p>Cargando clima...</p>
        ) : weatherError ? (
          <p>{weatherError}</p>
        ) : (
          <div className="weather-card">
            <h3>{weather.name}, {weather.sys.country}</h3>
            <p>Temperatura: {weather.main.temp}°C</p>
            <p>Descripción: {weather.weather[0].description}</p>
            <p>Viento: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>

      <div className="city-selector">
        <label htmlFor="city">Selecciona una ciudad:</label>
        <select
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="Chillan">Chillan</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Paris">Paris</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
          <option value="Tokyo">Tokyo</option>
        </select>
      </div>
    </div>
  );
};

export default Home;
