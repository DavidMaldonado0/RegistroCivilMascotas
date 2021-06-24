import React, { useState, Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    breed: '',
    owner: '',
    location: '',
    age: '',
    phone: '',
    facebook: '',
    instagram: '',
    twitter: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      breed: loading || !profile.breed ? '' : profile.breed,
      owner: loading || !profile.owner ? '' : profile.owner,
      location: loading || !profile.location ? '' : profile.location,
      age: loading || !profile.age ? '' : profile.age,
      phone: loading || !profile.phone ? '' : profile.phone,
      facebook: loading || !profile.facebook ? '' : profile.facebook,
      instagram: loading || !profile.instagram ? '' : profile.instagram,
      twitter: loading || !profile.twitter ? '' : profile.twitter
    });
  }, [loading, getCurrentProfile]);

  const {
    breed,
    owner,
    location,
    age,
    phone,
    facebook,
    instagram,
    twitter
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary text-center'>
        Crea el perfil de tu Mascota
      </h1>
      <p className='lead text-center'>
        La información solicitada es necesaria para poder identificar a tu
        Mascota
      </p>
      <small>* = campos obligatorios</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select name='breed' value={breed} onChange={e => onChange(e)}>
            <option value='0'>* Selecciona la Raza de tu Perro</option>
            <option value='Labrador'>Labrador</option>
            <option value='Pastor Alemán'>Pastor Alemán</option>
            <option value='Bulldog'>Bulldog</option>
            <option value='Beagle'>Beagle</option>
            <option value='Chihuahua'>Chihuahua</option>
            <option value='Husky Siberiano'>Husky Siberiano</option>
            <option value='Boxer'>Boxer</option>
            <option value='Terrier'>Terrier</option>
            <option value='Cocker Spaniel'>Cocker Spaniel</option>
            <option value='Dalmata'>Dalmata</option>
            <option value='Doberman'>Doberman</option>
            <option value='Basset Hound'>Basset Hound</option>
            <option value='Rottweiler'>Rottweiler</option>
            <option value='Mestizo'>Mestizo</option>
            <option value='Otro'>Otro</option>
          </select>
          <small className='form-text'>
            Si la raza de tu perro no se encuentra, selecciona "Otro"
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Nombre del Dueño'
            name='owner'
            value={owner}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Introduce el nombre COMPLETO del dueño
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Dirección (Ej. Blvd Morazán, Fco. Morazán)'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Introduce el lugar donde se pueda localizar la Mascota
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Teléfono de Contacto'
            name='phone'
            value={phone}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Introduce el teléfono de la persona encargada de la Mascota
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Edad'
            name='age'
            value={age}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Si desconoces la edad, introduce un aproximado
          </small>
        </div>

        <div className='my-2 text-center'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Añade Tus Redes Sociales
          </button>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <div className='buttons text-center'>
          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/dashboard'>
            Regresar
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
