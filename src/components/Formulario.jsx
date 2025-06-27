import React from 'react';
import './Formulario.css';
import { FaUser, FaEnvelope } from 'react-icons/fa';

const Formulario = () => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h3 className="form-title">¡Únete a la lista de espera!</h3>
        <p className="form-description">
          Deja tus datos y te avisaremos cuando GenIA esté disponible.
        </p>
      </div>
      <form className="form-horizontal">
        <div className="input-group">
          <span className="input-icon"><FaUser /></span>
          <input
            type="text"
            placeholder="Nombre"
            className="input-field"
            autoComplete="given-name"
            inputMode="text"
            name="firstName"
          />
        </div>
        <div className="input-group">
          <span className="input-icon"><FaUser /></span>
          <input
            type="text"
            placeholder="Apellido"
            className="input-field"
            autoComplete="family-name"
            inputMode="text"
            name="lastName"
          />
        </div>
        <div className="input-group">
          <span className="input-icon"><FaEnvelope /></span>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="input-field"
            autoComplete="email"
            inputMode="email"
            name="email"
          />
        </div>
        <button type="submit" className="form-button" aria-label="Enviar formulario para unirse a la lista de espera">
          Quiero conocer GenIA
        </button>
      </form>
    </div>
  );
};

export default Formulario; 