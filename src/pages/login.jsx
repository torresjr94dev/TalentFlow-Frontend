import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                alert('Login exitoso');
            } else {
                alert('Error en el login');
            }
        } catch (error) {
            console.error('Error en el login', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Bienvenido a TalentFlow</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="text"
                        name="username"
                        placeholder="Usuario"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="login-input"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
