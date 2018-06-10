import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IntlProvider, FormattedMessage } from 'react-intl';
import Select from 'react-select'

import EditableName from '../EditableName'
import { filterAvailableOrks } from '../../helpers'
import { getVehicleNameByType, vehicleType } from '../../const'
import { bigGunz } from '../../const/bigGunz'
import {
    deleteVehicle,
    renameVehicle,
    assignDriver,
    buyVehicleWeapon,
} from '../../actions';

const orkToOption = ork => ({ value: ork.id, label: ork.name});
const bigGunToOption = bigGun => ({
    value: bigGun.type,
    label: <span>{bigGun.name} <em>{bigGun.comment}</em></span>,
})

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
    availableGunners,
    deleteVehicle,
    renameVehicle,
    assignDriver,
    buyVehicleWeapon,
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
                <label for={`driver_${vehicle.id}`}><FormattedMessage id='vehicle.driver' /></label>
                <Select
                    id={`driver_${vehicle.id}`}
                    options={availableDrivers}
                    onChange={({value}) => assignDriver(vehicle.id, value)} value={availableDrivers.find(o => o.value === vehicle.driver)}
                    searchable={false}
                    styles={driverSelectStyles}
                />
            </div>
            {(vehicle.type !== vehicleType.bike) && <div className="weapon">
                <label for={`weapon_${vehicle.id}`}><FormattedMessage id='vehicle.weapon' /></label>
                <Select
                    id={`weapon_${vehicle.id}`}
                    onChange={({value}) => buyVehicleWeapon(vehicle.id, value)}
                    options={bigGunz.map(bigGunToOption)}
                    searchable={false}
                    styles={driverSelectStyles}
                    value={vehicle.weapon && bigGunToOption(bigGunz.find(bg => bg.type === vehicle.weapon))}
                />
                {vehicle.weapon && (
                    <div className="gunner">
                        <label for={`gunner_${vehicle.id}`}><FormattedMessage id='vehicle.gunner' /></label>
                        <Select
                            id={`gunner_${vehicle.id}`}
                            onChange={({value}) => assignDriver(vehicle.id, value)}
                            options={availableDrivers}
                            searchable={false}
                            styles={driverSelectStyles}
                            value={availableDrivers.find(o => o.value === vehicle.gunner)}
                        />
                    </div>
                )}
            </div>})
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
    buyVehicleWeapon,
  }, dispatch)

const mapStateToProps = (state, props) => ({
    language: state.app.language,
    vehicle: state.vehicles.find(vehicle => vehicle.id === props.id),
    availableDrivers: filterAvailableOrks(state, state.vehicles.find(vehicle => vehicle.id === props.id).driver).map(orkToOption),
    availableGunners: filterAvailableOrks(state, state.vehicles.find(vehicle => vehicle.id === props.id).gunner).map(orkToOption),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Vehicle);


