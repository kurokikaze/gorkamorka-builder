import {
    BUY_BUGGY,
    BUY_TRAK,
    BUY_BIKE,
    DELETE_VEHICLE,
    RENAME_VEHICLE,
    ASSIGN_DRIVER,
    ASSIGN_GUNNER,
    BUY_VEHICLE_WEAPON,
    BUY_VEHICLE_LINKED_WEAPON,
    SELL_VEHICLE_WEAPON,
} from '../actions';

import {vehicleType, getVehicleNameByType} from '../const';

const getNextId = vehicles => vehicles.reduce((id, vehicle) => Math.max(vehicle.id, id), 0) + 1;

const vehiclesReducer = (vehicles = [], action) => {
    switch (action.type) {
        case BUY_BUGGY:
            return [...vehicles, {
                name: getVehicleNameByType(vehicleType.buggy),
                type: vehicleType.buggy,
                weapon: null,
                id: getNextId(vehicles),
            }];
        case BUY_TRAK:
            return [...vehicles, {
                name: getVehicleNameByType(vehicleType.trak),
                type: vehicleType.trak,
                weapon: null,
                id: getNextId(vehicles),
            }];
        case BUY_BIKE:
            return [...vehicles, {
                name: getVehicleNameByType(vehicleType.bike),
                type: vehicleType.bike,
                weapon: null,
                id: getNextId(vehicles),
            }];
        case BUY_VEHICLE_WEAPON:
            return vehicles.map(vehicle => vehicle.id === action.vehicleId ? {...vehicle, weapon: action.weaponType, linkedWeapon: false} : vehicle);
        case SELL_VEHICLE_WEAPON:
            return vehicles.map(vehicle => vehicle.id === action.vehicleId ? {...vehicle, weapon: null, linkedWeapon: false} : vehicle);
        case BUY_VEHICLE_LINKED_WEAPON:
            return vehicles.map(vehicle => vehicle.id === action.vehicleId ? {...vehicle, weapon: action.weaponType, linkedWeapon: true} : vehicle);
        case ASSIGN_DRIVER:
            return vehicles.map(vehicle => vehicle.id === action.vehicleId ? {...vehicle, driver: action.unitId} : vehicle);
        case ASSIGN_GUNNER:
            return vehicles.map(vehicle => vehicle.id === action.vehicleId ? {...vehicle, gunner: action.unitId} : vehicle);
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
