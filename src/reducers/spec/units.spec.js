import unitsReducer from '../units'; 

import {
    BUY_BOY,
    DELETE_VEHICLE,
    BUY_VEHICLE_WEAPON,
    BUY_VEHICLE_LINKED_WEAPON,
} from '../../actions';

import {
    unitType,
    vehicleType
} from '../../const';

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
} from '../../const/costs';


describe('Units Reducer', () => {
    it.only('adds a boy when buying a boy', () => {
        const startingUnits = [];

        const targetUnits = [{
            id: 1,
            name: 'Бой',
            type: unitType.boy
        }];
        const buyBoyAction = {type: BUY_BOY};

        expect(unitsReducer(startingUnits, buyBoyAction)).toEqual(targetUnits);
    });

    it.only('adds a boy when while already having a boy', () => {
        const startingUnits = [{
            id: 14,
            name: 'Тестер',
            type: unitType.boy
        }];

        const targetUnits = [
            ...startingUnits,
            {
                id: 15,
                name: 'Бой',
                type: unitType.boy
            }
        ];
        const buyBoyAction = {type: BUY_BOY};

        expect(unitsReducer(startingUnits, buyBoyAction)).toEqual(targetUnits);
    });
});