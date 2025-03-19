// views/Login.jsx
import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/User';
import { useNavigate } from 'react-router-dom'; // Para redirigir al usuario

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useContext(UserContext); // Accedemos a la función login desde el contexto
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulamos un login (esto deberías reemplazarlo con la autenticación real)
    if (formData.username === 'admin' && formData.password === '1234') {
      login({ username: formData.username }); // Guardamos al usuario en el contexto
      navigate('/administrador'); // Redirigimos a la página de administrador
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
    <h1>Login</h1>
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="form-input"
        />
      </div>
      <button type="submit" className="login-button">Login</button>
    </form>
  </div>  );
};

export default Login;
