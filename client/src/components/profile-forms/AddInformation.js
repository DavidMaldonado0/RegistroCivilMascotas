import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addInformation } from '../../actions/profile';

const AddInformation = ({ addInformation, history }) => {

  const [formData, setFormData] = useState({
    age: '',
    location: '',
    diseases: '',
    veterinary: ''
  });

  const { age, location, diseases, veterinary } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  return <Fragment>
    <h1 className="large text-primary">Añade Información Sobre tu Mascota</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Agrega información para localizar e identificar a tu mascota
      </p>
      <small>* = campo requerido</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addInformation(formData, navigate);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Edad en años"
            name="age"
            value={age}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Dirección"
            name="location"
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="¿Tiene alguna enfermedad?"
            name="diseases"
            value={location}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Veterinario que lo "
            name="diseases"
            value={diseases}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Veterinario / Clinica veterinaria que visita "
            name="veterinary"
            value={veterinary}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Regresar
        </Link>
      </form>
  </Fragment>;
};

AddInformation.propTypes = {
  addInformation: PropTypes.func.isRequired
};

export default connect(null, { addInformation })(AddInformation);
