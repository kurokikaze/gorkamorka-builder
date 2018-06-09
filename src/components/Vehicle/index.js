import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditableName from '../EditableName'
import {getVehicleNameByType} from '../../const'
import {
    deleteVehicle,
    renameVehicle,
} from '../../actions';

const Vehicle = ({
    vehicle,
    deleteVehicle,
    renameVehicle,
}) => (
    <li key={`vehicle_${vehicle.id}`}>
        <EditableName name={vehicle.name} onSave={name => renameVehicle(vehicle.id, name)} />
        {(getVehicleNameByType(vehicle.type) !== vehicle.name) && <div className="unitType">{getVehicleNameByType(vehicle.type)}</div>}
        <button onClick={() => deleteVehicle(vehicle.id)}>Удалить</button>
    </li>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteVehicle,
    renameVehicle,
  }, dispatch)

const mapStateToProps = (state, props) => ({
    vehicle: state.vehicles.find(vehicle => vehicle.id === props.id),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Vehicle);


