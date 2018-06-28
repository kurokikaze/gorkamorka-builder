import teefReducer from '../teef'; 

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


describe('Teef Reducer (lol)', () => {
    it('reduces teef when buying a unit', () => {
        const startingTeef = 100;

        const targetTeef = startingTeef - boyCost;
        const buyBoyAction = {type: BUY_BOY};

        expect(teefReducer(startingTeef, buyBoyAction)).toEqual(targetTeef);
    });

    it('refunds teef when deleting a trak', () => {
        const startingTeef = 100;
        const refundAmount = trakCost;
        const targetTeef = startingTeef + refundAmount;

        const deleteVehicleAction = {
            type: DELETE_VEHICLE,
            vehicleType: vehicleType.trak,
            addTeef: 0
        };

        expect(teefReducer(startingTeef, deleteVehicleAction)).toEqual(targetTeef);
    });

    it('refunds teef when deleting a buggy', () => {
        const startingTeef = 100;
        const refundAmount = buggyCost;
        const targetTeef = startingTeef + refundAmount;

        const deleteVehicleAction = {
            type: DELETE_VEHICLE,
            vehicleType: vehicleType.buggy,
            addTeef: 0
        };

        expect(teefReducer(startingTeef, deleteVehicleAction)).toEqual(targetTeef);
    });

    it('refunds teef when deleting a bike', () => {
        const startingTeef = 100;
        const refundAmount = bikeCost;
        const targetTeef = startingTeef + refundAmount;

        const deleteVehicleAction = {
            type: DELETE_VEHICLE,
            vehicleType: vehicleType.bike,
            addTeef: 0
        };

        expect(teefReducer(startingTeef, deleteVehicleAction)).toEqual(targetTeef);
    });

    it('refunds teef when deleting a buggy with additional refund', () => {
        const startingTeef = 100;
        const refundAmount = buggyCost;
        const additionalRefund = 20;
        const targetTeef = startingTeef + refundAmount + additionalRefund;

        const deleteVehicleAction = {
            type: DELETE_VEHICLE,
            vehicleType: vehicleType.buggy,
            addTeef: additionalRefund,
        };

        expect(teefReducer(startingTeef, deleteVehicleAction)).toEqual(targetTeef);
    });

    it('refunds teef when deleting a trak with additional refund', () => {
        const startingTeef = 100;
        const refundAmount = trakCost;
        const additionalRefund = 25;
        const targetTeef = startingTeef + refundAmount + additionalRefund;

        const deleteVehicleAction = {
            type: DELETE_VEHICLE,
            vehicleType: vehicleType.trak,
            addTeef: additionalRefund,
        };

        expect(teefReducer(startingTeef, deleteVehicleAction)).toEqual(targetTeef);
    });

    it('substracts teef when buying vehicle weapon', () => {
        const startingTeef = 100;
        const gunCost = 25;
        const targetTeef = startingTeef - gunCost;

        const buyVehicleGunAction = {
            type: BUY_VEHICLE_WEAPON,
            oldGunCost: 0,
            cost: gunCost,
        };

        expect(teefReducer(startingTeef, buyVehicleGunAction)).toEqual(targetTeef);
    });

    it('substracts teef when buying vehicle weapon with refund', () => {
        const startingTeef = 100;
        const gunCost = 25;
        const gunRefund = 11;
        const targetTeef = startingTeef - gunCost + gunRefund;

        const buyVehicleGunAction = {
            type: BUY_VEHICLE_WEAPON,
            oldGunCost: gunRefund,
            cost: gunCost,
        };

        expect(teefReducer(startingTeef, buyVehicleGunAction)).toEqual(targetTeef);
    });
    /*
        case BUY_VEHICLE_LINKED_WEAPON:
            return teef + action.oldGunCost - action.cost;    
    */
    it('substracts teef when buying linked weapons', () => {
        const startingTeef = 100;
        const gunCost = 25;
        const targetTeef = startingTeef - gunCost;

        const buyVehicleGunAction = {
            type: BUY_VEHICLE_LINKED_WEAPON,
            oldGunCost: 0,
            cost: gunCost,
        };

        expect(teefReducer(startingTeef, buyVehicleGunAction)).toEqual(targetTeef);
    });

    it('substracts teef when buying linked weapons with refund', () => {
        const startingTeef = 100;
        const gunCost = 25;
        const gunRefund = 11;
        const targetTeef = startingTeef - gunCost + gunRefund;

        const buyVehicleGunAction = {
            type: BUY_VEHICLE_LINKED_WEAPON,
            oldGunCost: gunRefund,
            cost: gunCost,
        };

        expect(teefReducer(startingTeef, buyVehicleGunAction)).toEqual(targetTeef);
    });
});