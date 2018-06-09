import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IntlProvider, FormattedMessage } from 'react-intl';
import EditableName from '../EditableName'
import {getVehicleNameByType} from '../../const'
import {
    deleteVehicle,
    renameVehicle,
} from '../../actions';

const Vehicle = ({
    language,
    vehicle,
    deleteVehicle,
    renameVehicle,
}) => (
    <IntlProvider locale={language}>    
        <li key={`vehicle_${vehicle.id}`}>
            <EditableName 
                name={vehicle.name} 
                onSave={name => renameVehicle(vehicle.id, name)} 
                language={language}
            />
            {(getVehicleNameByType(vehicle.type) !== vehicle.name) && <div className="unitType">{getVehicleNameByType(vehicle.type)}</div>}
            <button onClick={() => deleteVehicle(vehicle.id)}><FormattedMessage id='app.delete' /></button>
        </li>
    </IntlProvider>    
)

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteVehicle,
    renameVehicle,
  }, dispatch)

const mapStateToProps = (state, props) => ({
    language: state.app.language,
    vehicle: state.vehicles.find(vehicle => vehicle.id === props.id),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Vehicle);


