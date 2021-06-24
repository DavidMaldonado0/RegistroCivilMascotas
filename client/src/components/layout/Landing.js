import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Registro de Mascotas</h1>
          <p className='lead'>
            Crea un perfil para tu mascota y registralo con el ID de su
            Microchip
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Registrar
            </Link>
            <Link to='/login' className='btn btn-primary'>
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
