import {
    BUY_NOB,
    BUY_BOY,
    BUY_SPANNER,
    BUY_SLAVER,
    BUY_YOOF,
    BUY_GROT,
    DELETE_UNIT,
    RENAME_UNIT,
} from '../actions';
import {unitType} from '../const';

const getNextId = units => units.reduce((id, unit) => Math.max(unit.id, id), 0) + 1;

const unitsReducer = (units = [], action) => {
    switch (action.type) {
        case BUY_NOB:
            return [...units, {
                name: 'Ноб',
                type: unitType.nob,
                id: getNextId(units),
            }];
        case BUY_BOY:
            return [...units, {
                name: 'Бой',
                type: unitType.boy,
                id: getNextId(units),
            }];
        case BUY_SPANNER:
            return [...units, {
                name: 'Спаннер',
                type: unitType.spanner,
                id: getNextId(units),
            }];
        case BUY_SLAVER:
            return [...units, {
                name: 'Слейвер',
                type: unitType.slaver,
                id: getNextId(units),
            }];
        case BUY_YOOF:
            return [...units, {
                name: 'Юфф',
                type: unitType.yoof,
                id: getNextId(units),
            }];
        case BUY_GROT:
            return [...units, {
                name: 'Грот',
                type: unitType.grot,
                id: getNextId(units),
            }];
        case RENAME_UNIT:
            return units.map(u => u.id === action.id ? getRenamedUnit(u, action.name) : u);
        case DELETE_UNIT:
            return units.filter(unit => unit.id !== action.id);
        default:
            return units;
    }
}

const getRenamedUnit = (unit, name) => ({...unit, name})

export default unitsReducer;
