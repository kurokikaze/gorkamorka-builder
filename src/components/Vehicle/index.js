import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IntlProvider, FormattedMessage } from 'react-intl';
import Select from 'react-select'

import EditableName from '../EditableName'
import { filterAvailableDrivers } from '../../helpers'
import { getVehicleNameByType } from '../../const'
import {
    deleteVehicle,
    renameVehicle,
    assignDriver,
} from '../../actions';

const orkToOption = ork => ({ value: ork.id, label: ork.name});

const elementStyle = {
    fontSize: '12px',
    maxWidth: 250,
};

const driverSelectStyles = {
    select: base => ({
        'padding-vertical': '2px',
    }),
    control: (base) => ({
        ...base,
        ...elementStyle,
    }),
    option: base => ({
        ...base,
        ...elementStyle,
    }),
    menu: base => ({
        ...base,
        ...elementStyle,
    }),
    singleValue: base => ({
        ...base,
        ...elementStyle,
        paddingTop: 0,
        paddingBottom: 0,
    })
};

const Vehicle = ({
    language,
    vehicle,
    availableDrivers,
    deleteVehicle,
    renameVehicle,
    assignDriver,
}) => (
    <IntlProvider locale={language}>
        <li key={`vehicle_${vehicle.id}`}>
            <EditableName
                name={vehicle.name}
                onSave={name => renameVehicle(vehicle.id, name)}
                language={language}
            />
            {(getVehicleNameByType(vehicle.type) !== vehicle.name) && <div className="unitType">{getVehicleNameByType(vehicle.type)}</div>}
            <div className="driver">
                <Select
                    options={availableDrivers}
                    onChange={({value}) => assignDriver(vehicle.id, value)} value={availableDrivers.find(o => o.value === vehicle.driver)}
                    searchable={false}
                    styles={driverSelectStyles}
                />
            </div>
            <div className="vehicleActions">
                <button onClick={() => deleteVehicle(vehicle.id)}><FormattedMessage id='app.delete' /></button>
            </div>
        </li>
    </IntlProvider>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteVehicle,
    renameVehicle,
    assignDriver,
  }, dispatch)

const mapStateToProps = (state, props) => ({
    language: state.app.language,
    vehicle: state.vehicles.find(vehicle => vehicle.id === props.id),
    availableDrivers: filterAvailableDrivers(state, state.vehicles.find(vehicle => vehicle.id === props.id).driver).map(orkToOption),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Vehicle);


