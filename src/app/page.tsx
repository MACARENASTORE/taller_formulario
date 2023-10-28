"use client"
import Image from 'next/image'
import styles from './page.module.css'

import React, { useState } from 'react';

const VeterinaryRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    appointmentDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="centered-container">
      <div className="centered-form">
      <h2>Registro en la Clínica Veterinaria</h2>
      <form>
        <div className="form-group">
          <label>Nombre del Dueño:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Teléfono de Contacto:</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Nombre de la Mascota:</label>
          <input
            type="text"
            className="form-control"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Tipo de Mascota:</label>
          <select
            className="form-control"
            name="petType"
            value={formData.petType}
            onChange={handleChange}
          >
            <option value="">Seleccionar tipo</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div className="form-group">
          <label>Fecha de la Cita:</label>
          <input
            type="date"
            className="form-control"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
          />
        </div>
      </form>
      <h3>Resumen de los Datos:</h3>
      <p>Nombre del Dueño: {formData.name}</p>
      <p>Correo Electrónico: {formData.email}</p>
      <p>Teléfono de Contacto: {formData.phone}</p>
      <p>Nombre de la Mascota: {formData.petName}</p>
      <p>Tipo de Mascota: {formData.petType}</p>
      <p>Fecha de la Cita: {formData.appointmentDate}</p>
      </div>
    </div>
  );
};

export default VeterinaryRegistrationForm;