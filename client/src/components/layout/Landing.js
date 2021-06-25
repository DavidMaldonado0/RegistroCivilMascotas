import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Information from './Information';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div>
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 data-aos="fade-down" data-aos-duration="1000" className='x-large'>Registro Civil de Mascotas</h1>
          <p data-aos="fade-down" data-aos-duration="1000" className='lead'>
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
    <Information/>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
