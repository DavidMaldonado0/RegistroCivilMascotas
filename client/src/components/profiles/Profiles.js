import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles } }) => {
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <Fragment>
      <h1 className='large text-primary text-center'>Mascotas</h1>
      <p className='lead text-center'>Descubre Mascotas en tu comunidad</p>
      <div className='profiles'>
        Display de Perfiles de Mascotas
        <p>Mostrar mascotas con microship</p>
        <p>Connect al backend server de Express</p>
        <p>Get de Profiles de MongoDB</p>
        <p>Inicio de Sesion aleatorio en el cloud ip del server</p>
        <p>Cierre de Sesion en momento del auth-server</p>
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <ProfileItem key={profile._id} profile={profile} />
          ))
        ) : (
          <h4>No se encontraron mascotas</h4>
        )}
      </div>
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
