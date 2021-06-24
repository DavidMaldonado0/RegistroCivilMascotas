import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='text-center dash-buttons my-2'>
      <Link to='/edit-profile' className='btn btn-light'>
        Editar Perfil
      </Link>
    </div>
  );
};

export default DashboardActions;
