import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IntlProvider, FormattedMessage } from 'react-intl';
import Select from 'react-select'

import EditableName from '../EditableName'
import { filterAvailableOrks, getVehicleTypeName } from '../../helpers'
import { getVehicleNameByType, vehicleType } from '../../const'
import { bigGunz } from '../../const/bigGunz'
import { gunz } from '../../const/gunz'

import {
    deleteVehicle,
    renameVehicle,
    assignDriver,
    assignGunner,
    buyVehicleWeapon,
    buyVehicleLinkedWeapon,
    sellVehicleWeapon,
} from '../../actions';

const orkToOption = ork => ({ value: ork.id, label: ork.name});
const bigGunToOption = bigGun => ({
    twinLinked: false,
    value: bigGun.type,
    label: <span><FormattedMessage id={bigGun.name} /> <em>[ {bigGun.cost} ]</em></span>,
});

const noWeaponOption = {
    twinLinked: true,
    value: 'noWeapon',
    label: <FormattedMessage id='weaponType.noWeapon' />
}

const gunToTwinLinkedOption = gun => ({
    twinLinked: true,
    value: gun.type,
    label: <span><FormattedMessage id='weaponType.twinLinked' /> <FormattedMessage id={gun.name}/> <em>[ {gun.cost * 2} ]</em></span>
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

const getVehicleWeaponOption = vehicle => {
    if (vehicle.weapon) {
        if (vehicle.linkedWeapon) {
            return gunToTwinLinkedOption(gunz.find(gun => gun.type === vehicle.weapon));
        } else {
            return bigGunToOption(bigGunz.find(bg => bg.type === vehicle.weapon));
        }
    }
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
    buyVehicleLinkedWeapon,
    sellVehicleWeapon,
}) => (
    <IntlProvider locale={language}>
        <li key={`vehicle_${vehicle.id}`}>
            <EditableName
                name={vehicle.name}
                onSave={name => renameVehicle(vehicle.id, name)}
                language={language}
            />
            {(getVehicleNameByType(vehicle.type) !== vehicle.name) && <div className="vehicleType"><FormattedMessage id={getVehicleTypeName(vehicle.type)} /></div>}
            <div className="driver">
                <label htmlFor={`driver_${vehicle.id}`}><FormattedMessage id='vehicle.driver' /></label>
                <Select
                    id={`driver_${vehicle.id}`}
                    options={availableDrivers}
                    onChange={({value}) => assignDriver(vehicle.id, value)}
                    searchable={false}
                    styles={driverSelectStyles}
                    value={availableDrivers.find(o => o.value === vehicle.driver)}
                />
            </div>
            {(vehicle.type === vehicleType.bike) && <div className="weapon">
                <label htmlFor={`weapon_${vehicle.id}`}><FormattedMessage id='vehicle.weapon' /></label>
                <Select
                    id={`weapon_${vehicle.id}`}
                    onChange={({value}) => buyVehicleLinkedWeapon(vehicle.id, value)}
                    options={[...gunz.map(gunToTwinLinkedOption), noWeaponOption]}
                    searchable={false}
                    styles={driverSelectStyles}
                    value={getVehicleWeaponOption(vehicle) || ''}
                />
                {vehicle.weapon && <button onClick={() => sellVehicleWeapon(vehicle.id)}><FormattedMessage id='app.deleteVehicleWeapon' /></button>}
            </div>}

            {(vehicle.type !== vehicleType.bike) && <div className="weapon">
                <label htmlFor={`weapon_${vehicle.id}`}><FormattedMessage id='vehicle.weapon' /></label>
                <Select
                    id={`weapon_${vehicle.id}`}
                    disabled={availableGunners.length === 0}
                    onChange={({twinLinked, value}) => twinLinked ? buyVehicleLinkedWeapon(vehicle.id, value) : buyVehicleWeapon(vehicle.id, value)}
                    options={[ ...bigGunz.map(bigGunToOption), ...gunz.map(gunToTwinLinkedOption)]}
                    searchable={false}
                    styles={driverSelectStyles}
                    value={getVehicleWeaponOption(vehicle) || ''}
                />
                {vehicle.weapon && (
                <div className="vehicleActions">
                    <button onClick={() => sellVehicleWeapon(vehicle.id)}><FormattedMessage id='app.deleteVehicleWeapon' /></button>
                    <div className="gunner">
                        <label htmlFor={`gunner_${vehicle.id}`}><FormattedMessage id='vehicle.gunner' /></label>
                        <Select
                            id={`gunner_${vehicle.id}`}
                            onChange={({value}) => assignGunner(vehicle.id, value)}
                            options={availableGunners}
                            searchable={false}
                            styles={driverSelectStyles}
                            value={availableGunners.find(o => o.value === vehicle.gunner)}
                        />
                    </div>
                </div>
                )}
            </div>}
            <div className="vehicleActions">
                <button onClick={() => deleteVehicle(vehicle.id)}><FormattedMessage id='app.deleteVehicle' /></button>
            </div>
        </li>
    </IntlProvider>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteVehicle,
    renameVehicle,
    assignDriver,
    assignGunner,
    buyVehicleWeapon,
    buyVehicleLinkedWeapon,
    sellVehicleWeapon,
  }, dispatch)

const mapStateToProps = (state, props) => {
    const vehicle = state.vehicles.find(vehicle => vehicle.id === props.id);
    return {
    language: state.app.language,
    vehicle,
    availableDrivers: filterAvailableOrks(state, vehicle.driver).map(orkToOption),
    availableGunners: filterAvailableOrks(state, vehicle.gunner).map(orkToOption),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Vehicle);


