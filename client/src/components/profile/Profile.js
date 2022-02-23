import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return <Fragment>
    <h1>Perfil</h1>
    <Link to='/profiles' className="btn btn-primary">Volver a Perfiles</Link>
    {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (
      <Link to={"/edit-profile"} className="btn btn-dark">
        Editar Perfil
      </Link>
    )}
  </Fragment>;
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
