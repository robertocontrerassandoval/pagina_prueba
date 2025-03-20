import React, { useState } from 'react';
import { useCards } from '../contexts/CardContext';  // Importamos el contexto

const Administrador = () => {
  const { addCard } = useCards();  // Obtener la función addCard del contexto
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si el formulario tiene todos los datos, agregamos la nueva card
    if (formData.title && formData.description && formData.image) {
      addCard(formData);  // Llamamos a addCard para agregar la card al contexto
      setFormData({ title: '', description: '', image: '' });  // Limpiar el formulario
    } else {
      alert("Por favor completa todos los campos.");
    }
  };

  return (
    <div className="administrador">
      <h1>Administrador</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="image">Imagen (URL)</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Crear Card</button>
      </form>
    </div>
  );
};

export default Administrador;
