import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <h1 className='large text-primary text-center'>Inicio</h1>
      <p className='text-center'>
        <i className='fas fa-paw'></i> Bienvenido al perfil de{' '}
        {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
        </Fragment>
      ) : (
        <Fragment>
          <p className='text-center my-2'>
            Tu mascota no tiene un perfil completo, por favor agrega su
            información
          </p>
          <div className='buttons text-center'>
            <Link to='/create-profile' className='btn btn-primary  my-2'>
              Crear Perfil
            </Link>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStatetoProps, { getCurrentProfile })(Dashboard);
