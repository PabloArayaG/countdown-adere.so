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
            autoComplete="off"
          />
        </div>
        <div className="input-group">
          <span className="input-icon"><FaUser /></span>
          <input
            type="text"
            placeholder="Apellido"
            className="input-field"
            autoComplete="off"
          />
        </div>
        <div className="input-group">
          <span className="input-icon"><FaEnvelope /></span>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="input-field"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="form-button">Quiero conocer GenIA</button>
      </form>
    </div>
  );
};

export default Formulario; 