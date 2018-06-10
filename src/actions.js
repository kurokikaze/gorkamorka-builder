import {
    nobCost,
    boyCost,
    slaverCost,
    spannerCost,
    grotCost,
    yoofCost,
    buggyCost,
    trakCost,
    bikeCost,
} from './const/costs';

import {
    bigGunz,
} from './const/bigGunz';

export const BUY_NOB = 'BUY/UNITS/NOB';
export const BUY_BOY = 'BUY/UNITS/BOY';
export const BUY_SPANNER = 'BUY/UNITS/SPANNER';
export const BUY_SLAVER = 'BUY/UNITS/SLAVER';
export const BUY_YOOF = 'BUY/UNITS/YOOF';
export const BUY_GROT = 'BUY/UNITS/GROT';

export const DELETE_UNIT = 'DELETE/UNITS/UNIT';

export const RENAME_UNIT = 'RENAME/UNITS/UNIT';
export const RENAME_VEHICLE = 'RENAME/VEHICLES/VEHICLE';

export const BUY_BUGGY = 'BUY/VEHICLES/BUGGY';
export const BUY_TRAK = 'BUY/VEHICLES/TRAK';
export const BUY_BIKE = 'BUY/VEHICLES/BIKE';
export const BUY_VEHICLE_WEAPON = 'BUY/WEAPONS/VEHICLE';

export const ASSIGN_DRIVER = 'ASSIGN/VEHICLES/DRIVER';
export const ASSIGN_SHOOTER = 'ASSIGN/VEHICLES/SHOOTER';

export const DELETE_VEHICLE = 'DELETE/VEHICLES/VEHICLE';

export const ERROR_BUYING = 'ERROR/BUY';
export const ERROR_DELETING = 'ERROR/DELETE';
export const ERROR_RENAMING = 'ERROR/RENAME';
export const ERROR_ASSIGNING = 'ERROR/ASSIGN';

export const NOT_ENOUGH_TEEF = 'NOT_ENOUGH_TEEF';
export const NOT_ENOUGH_SLOTS = 'NOT_ENOUGH_SLOTS';
export const ID_NOT_FOUND = 'ID_NOT_FOUND';

export const SWITCH_LANGUAGE = 'APP/SWITCH_LANGUAGE';

// Найм орков и покупка гротов

export const buyNob = () => {
    return (dispatch, getState) => {
        const teef = getState().teef;
        if (teef >= nobCost) {
            dispatch({type: BUY_NOB});
        } else {
            dispatch({type: ERROR_BUYING, error: NOT_ENOUGH_TEEF});
        }
    }
}

export const buySpanner = () => {
    return (dispatch, getState) => {
        const teef = getState().teef;
        if (teef >= spannerCost) {
            dispatch({type: BUY_SPANNER});
        } else {
            dispatch({type: ERROR_BUYING, error: NOT_ENOUGH_TEEF});
        }
    }
}

export const buyBoy = () => {
    return (dispatch, getState) => {
        const teef = getState().teef;
        if (teef >= boyCost) {
            dispatch({type: BUY_BOY});
        } else {
            dispatch({type: ERROR_BUYING, error: NOT_ENOUGH_TEEF});
        }
    }
}

export const buySlaver = () => {
    return (dispatch, getState) => {
        const teef = getState().teef;
        if (teef >= slaverCost) {
            dispatch({type: BUY_SLAVER});
        } else {
            dispatch({type: ERROR_BUYING, error: NOT_ENOUGH_TEEF});
        }
    }
}

export const buyYoof = () => {
    return (dispatch, getState) => {
        const teef = getState().teef;
        if (teef >= yoofCost) {
            dispatch({type: BUY_YOOF});
        } else {
            dispatch({type: ERROR_BUYING, error: NOT_ENOUGH_TEEF});
        }
    }
}

export const deleteUnit = (id) => {
    return (dispatch, getState) => {
        const unit = getState().units.find(u => u.id === id);
        if (unit) {
            dispatch({type: DELETE_UNIT, id, unitType: unit.type});
        } else {
            dispatch({type: ERROR_DELETING, error: ID_NOT_FOUND});
        }
    }
}

export const deleteVehicle = (id) => {
    return (dispatch, getState) => {
        const vehicle = getState().vehicles.find(v => v.id === id);
        var addTeef = 0;
        if (vehicle.weapon) {
            addTeef = bigGunz.find(g => g.type === vehicle.weapon).cost;
        }
        if (vehicle) {
            dispatch({type: DELETE_VEHICLE, id, vehicleType: vehicle.type, addTeef});
        } else {
            dispatch({type: ERROR_DELETING, error: ID_NOT_FOUND});
        }
    }
}

export const renameUnit = (id, name) => {
    return (dispatch, getState) => {
        const unit = getState().units.find(u => u.id === id);
        if (unit) {
            dispatch({type: RENAME_UNIT, id, name});
        } else {
            dispatch({type: ERROR_RENAMING, error: ID_NOT_FOUND});
        }
    }
}

export const renameVehicle = (id, name) => {
    return (dispatch, getState) => {
        const vehicle = getState().vehicles.find(v => v.id === id);
        if (vehicle) {
            dispatch({type: RENAME_VEHICLE, id, name});
        } else {
            dispatch({type: ERROR_RENAMING, error: ID_NOT_FOUND});
        }
    }
}

export const buyGrot = () => {
    return (dispatch, getState) => {
        const teef = getState().teef;
        if (teef >= grotCost) {
            dispatch({type: BUY_GROT});
        } else {
            dispatch({type: ERROR_BUYING, error: NOT_ENOUGH_TEEF});
        }
    }
}

// Покупка машин

export const buyBuggy = () => {
    return (dispatch, getState) => {
        const teef = getState().teef;
        if (teef >= buggyCost) {
            dispatch({type: BUY_BUGGY});
        } else {
            dispatch({type: ERROR_BUYING, error: NOT_ENOUGH_TEEF});
        }
    }
}

export const buyTrak = () => {
    return (dispatch, getState) => {
        const teef = getState().teef;
        if (teef >= trakCost) {
            dispatch({type: BUY_TRAK});
        } else {
            dispatch({type: ERROR_BUYING, error: NOT_ENOUGH_TEEF});
        }
    }
}

export const buyBike = () => {
    return (dispatch, getState) => {
        const teef = getState().teef;
        if (teef >= bikeCost) {
            dispatch({type: BUY_BIKE});
        } else {
            dispatch({type: ERROR_BUYING, error: NOT_ENOUGH_TEEF});
        }
    }
}

export const buyVehicleWeapon = (vehicleId, weaponType) => {
    return (dispatch, getState) => {
        const vehicle = getState().vehicles.find(v => v.id === vehicleId);
        var oldGunCost = 0;
        if (vehicle.weapon) {
            oldGunCost = bigGunz.find(({type}) => type === vehicle.weapon).cost;
        }
        const bigGun = bigGunz.find(({type}) => type === weaponType);
        if (vehicle && bigGun) {
            console.log(`Buying new weapon: ${weaponType}, +${oldGunCost}, -${bigGun.cost}`);
            dispatch({type: BUY_VEHICLE_WEAPON, vehicleId, weaponType, cost: bigGun.cost, oldGunCost});
        } else {
            dispatch({type: ERROR_ASSIGNING, error: ID_NOT_FOUND});
        }
    }
}

export const assignDriver = (vehicleId, unitId) => {
    return (dispatch, getState) => {
        const vehicle = getState().vehicles.find(v => v.id === vehicleId);
        const unit = getState().units.find(v => v.id === unitId);
        if (vehicle && unit) {
            dispatch({type: ASSIGN_DRIVER, vehicleId, unitId});
        } else {
            dispatch({type: ERROR_ASSIGNING, error: ID_NOT_FOUND});
        }
    }
}

// Настройка

export const switchLanguage = language =>
    dispatch => dispatch({type: SWITCH_LANGUAGE, language});
