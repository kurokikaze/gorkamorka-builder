import {
    BUY_NOB,
    BUY_BOY,
    BUY_SPANNER,
    BUY_SLAVER,
    BUY_YOOF,
    BUY_GROT,
    BUY_BUGGY,
    BUY_TRAK,
    BUY_BIKE,
    DELETE_UNIT,
    DELETE_VEHICLE,
    BUY_VEHICLE_WEAPON,
    BUY_VEHICLE_LINKED_WEAPON,
} from '../actions';

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
} from '../const/costs';

import {
    startingTeef,
    unitType,
    vehicleType
} from '../const';

const teefReducer = (teef = startingTeef, action) => {
    switch (action.type) {
        case DELETE_UNIT:
            var unitRefund;
            switch (action.unitType) {
                case unitType.nob:
                    unitRefund = nobCost;
                    break;
                case unitType.boy:
                    unitRefund = boyCost;
                    break;
                case unitType.spanner:
                    unitRefund = spannerCost;
                    break;
                case unitType.slaver:
                    unitRefund = slaverCost;
                    break;
                case unitType.yoof:
                    unitRefund = yoofCost;
                    break;
                case unitType.grot:
                    unitRefund = grotCost;
                    break;
                default:
                    unitRefund = 0;
                    break;
            }
            return teef + unitRefund;
        case DELETE_VEHICLE:
            var vehicleRefund;
            switch (action.vehicleType) {
                case vehicleType.buggy:
                    vehicleRefund = buggyCost;
                    break;
                case vehicleType.trak:
                    vehicleRefund = trakCost;
                    break;
                case vehicleType.bike:
                    vehicleRefund = bikeCost;
                    break;
                default:
                    vehicleRefund = 0;
                    break;
            }
            vehicleRefund += action.addTeef;

            return teef + vehicleRefund;
        case BUY_VEHICLE_WEAPON:
            return teef + action.oldGunCost - action.cost;
        case BUY_VEHICLE_LINKED_WEAPON:
            return teef + action.oldGunCost - action.cost;
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
