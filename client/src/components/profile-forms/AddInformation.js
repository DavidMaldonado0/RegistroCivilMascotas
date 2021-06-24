import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AddInformation = props => {
  return <Fragment></Fragment>;
};

AddInformation.propTypes = {
  addInformation: PropTypes.func.isRequired
};

export default connect(null, { addInformation })(AddInformation);
