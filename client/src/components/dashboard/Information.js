import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { connect } from 'react-redux'

const Information = ({ information }) => {

    const informations = information.map(exp => (
        <tr key={information._id}>
            <td>{information.location}</td>
            <td>{information.veterinary}</td>
            <td>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )); 


  return (
    <Fragment>
        <h2 className="my-2">Información</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Edad</th>
                    <th className="hide-sm">Dirección</th>
                    <th className="hide-sm">Veterinario</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {informations}
            </tbody>
        </table>
    </Fragment>
  )
}

Information.propTypes = {
    information: PropTypes.array.isRequired
}

export default Information