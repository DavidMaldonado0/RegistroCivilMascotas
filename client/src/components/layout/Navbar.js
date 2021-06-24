import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Logo from '../../img/logo.png'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'> Mascotas </Link>
      </li>
      <li>
        <Link to='/dashboard'> Inicio </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          Cerrar Sesion
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Mascotas</Link>
      </li>
      <li>
        <Link to='/register'>Registrar</Link>
      </li>
      <li>
        <Link to='/login'>Ingresar</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-white'>

        <Link to='/'>
        <img src="../../img/logo.png" alt="" height={50} />
        </Link>

      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
