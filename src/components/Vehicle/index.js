import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    deleteVehicle,
} from '../../actions';

const Vehicle = ({
    vehicle,
    deleteVehicle
}) => (
    <li key={`vehicle_${vehicle.id}`}>
        <span>{vehicle.name}</span>
        <button onClick={() => deleteVehicle(vehicle.id)}>Удалить</button>
    </li>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteVehicle,
  }, dispatch)

const mapStateToProps = (state, props) => ({
    vehicle: state.vehicles.find(vehicle => vehicle.id === props.id),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Vehicle);


