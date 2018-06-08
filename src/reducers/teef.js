import {
    BUY_NOB,
    BUY_BOY,
    BUY_SPANNER,
    BUY_SLAVER,
    BUY_YOOF,
    BUY_GROT,
    BUY_BUGGY,
    BUY_TRAK,
    BUY_BIKE
} from '../actions'

import {
    nobCost,
    boyCost,
    spannerCost,
    slaverCost,
    yoofCost,
    grotCost,
    buggyCost,
    trakCost,
    bikeCost,
    startingTeef,
} from '../const';

const teefReducer = (teef = startingTeef, action) => {
    switch (action.type) {
        case BUY_NOB:
            return teef - nobCost;
        case BUY_BOY:
            return teef - boyCost;
        case BUY_SPANNER:
            return teef - spannerCost;
        case BUY_SLAVER:
            return teef - slaverCost;
        case BUY_YOOF:
            return teef - yoofCost;
        case BUY_GROT:
            return teef - grotCost;
        case BUY_BUGGY:
            return teef - buggyCost;
        case BUY_TRAK:
            return teef - trakCost;
        case BUY_BIKE:
            return teef - bikeCost;
        default: {
            return teef;
        }
    }
}

export default teefReducer;
