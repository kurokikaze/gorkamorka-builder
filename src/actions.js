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
} from './const';

export const BUY_NOB = 'BUY/UNITS/NOB';
export const BUY_BOY = 'BUY/UNITS/BOY';
export const BUY_SPANNER = 'BUY/UNITS/SPANNER';
export const BUY_SLAVER = 'BUY/UNITS/SLAVER';
export const BUY_YOOF = 'BUY/UNITS/YOOF';
export const BUY_GROT = 'BUY/UNITS/GROT';

export const BUY_BUGGY = 'BUY/UNITS/BUGGY';
export const BUY_TRAK = 'BUY/UNITS/TRAK';
export const BUY_BIKE = 'BUY/UNITS/BIKE';

export const ERROR_BUYING = 'ERROR/BUY';

export const NOT_ENOUGH_TEEF = 'NOT_ENOUGH_TEEF';
export const NOT_ENOUGH_SLOTS = 'NOT_ENOUGH_SLOTS';

export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

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

