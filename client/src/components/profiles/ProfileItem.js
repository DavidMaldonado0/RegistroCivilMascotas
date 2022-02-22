import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({ profile: {
  user: {_id, name, avatar, breed, owner },
  status,
  location
} 
}) => {
  return <div className="profile bg-light">
    <img src={avatar} className="round-img" />
    <div>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{breed}</p>
      <p>{owner}</p>
    </div>
    <Link to={`/profile/${_id}`} className="btn btn-primary">Ver Perfil</Link>
    </div>;
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
