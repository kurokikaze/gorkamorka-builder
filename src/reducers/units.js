import {
    BUY_NOB,
    BUY_BOY,
    BUY_SPANNER,
    BUY_SLAVER,
    BUY_YOOF,
    BUY_GROT, 
} from '../actions'

const unitsReducer = (units = [], action) => {
    switch (action.type) {
        case BUY_NOB:
            return [...units, 'Ноб'];
        case BUY_BOY:
            return [...units, 'Бой'];
        case BUY_SPANNER:
            return [...units, 'Спаннер'];
        case BUY_SLAVER:
            return [...units, 'Слейвер'];
        case BUY_YOOF:
            return [...units, 'Юфф'];
        case BUY_GROT:
            return [...units, 'Грот'];
        default: {
            return units;
        }
    }
}

export default unitsReducer;
