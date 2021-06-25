import React from 'react';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <h2 className='text-center my-2'>Acerca de Nosotros</h2>
            <p className='text-center'>
              Registro Civil de Mascotas, Honduras y Centro América.
            </p>
            <p className='text-center'>
              Honduras, Francisco Morazán, Tegucigalpa
            </p>
            <p className='text-center'>info@registrocivilmascotas.com</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-6 col-xs-12'>
            <p className='copyright-text'>
              Registro Civil de Mascotas &copy; 2021 Todos los
              derechos reservados {''}
              <a
                href='https://www.registrocivilmascotas.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Información
              </a>
              .
            </p>
          </div>

          <div className='col-md-4 col-sm-6 col-xs-12'>
            <ul className='social-icons'>
              <li>
                <a
                  href='https://es-la.facebook.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='facebook'
                >
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='twitter'
                >
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='instagram'
                >
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
