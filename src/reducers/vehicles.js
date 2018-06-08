import {
    BUY_BUGGY,
    BUY_TRAK,
    BUY_BIKE,
    DELETE_VEHICLE
} from '../actions';

import {vehicleType} from '../const';

const getNextId = vehicles => vehicles.reduce((id, vehicle) => Math.max(vehicle.id, id), 0) + 1;

const vehiclesReducer = (vehicles = [], action) => {
    switch (action.type) {
        case BUY_BUGGY:
            return [...vehicles, {
                name: 'Багги',
                type: vehicleType.buggy,
                id: getNextId(vehicles),
            }];
        case BUY_TRAK:
            return [...vehicles, {
                name: 'Трахтор',
                type: vehicleType.trak,
                id: getNextId(vehicles),
            }];
        case BUY_BIKE:
            return [...vehicles, {
                name: 'Байк',
                type: vehicleType.bike,
                id: getNextId(vehicles),
            }];
        case DELETE_VEHICLE:
            return vehicles.filter(vehicle => vehicle.id !== action.id);
        default: {
            return vehicles;
        }
    }
}

export default vehiclesReducer;
