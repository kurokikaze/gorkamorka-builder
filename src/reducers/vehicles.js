import {
    BUY_BUGGY,
    BUY_TRAK,
    BUY_BIKE,
    DELETE_VEHICLE,
    RENAME_VEHICLE,
} from '../actions';

import {vehicleType, getVehicleNameByType} from '../const';

const getNextId = vehicles => vehicles.reduce((id, vehicle) => Math.max(vehicle.id, id), 0) + 1;

const vehiclesReducer = (vehicles = [], action) => {
    switch (action.type) {
        case BUY_BUGGY:
            return [...vehicles, {
                name: getVehicleNameByType(vehicleType.buggy),
                type: vehicleType.buggy,
                id: getNextId(vehicles),
            }];
        case BUY_TRAK:
            return [...vehicles, {
                name: getVehicleNameByType(vehicleType.trak),
                type: vehicleType.trak,
                id: getNextId(vehicles),
            }];
        case BUY_BIKE:
            return [...vehicles, {
                name: getVehicleNameByType(vehicleType.bike),
                type: vehicleType.bike,
                id: getNextId(vehicles),
            }];
        case RENAME_VEHICLE:
            return vehicles.map(v => v.id === action.id ? getRenamedVehicle(v, action.name) : v);
        case DELETE_VEHICLE:
            return vehicles.filter(vehicle => vehicle.id !== action.id);
        default: {
            return vehicles;
        }
    }
}

const getRenamedVehicle = (vehicle, name) => ({...vehicle, name})

export default vehiclesReducer;
