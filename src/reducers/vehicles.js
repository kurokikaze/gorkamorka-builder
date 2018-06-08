import {
    BUY_BUGGY,
    BUY_TRAK,
    BUY_BIKE,
} from '../actions'

const vehiclesReducer = (vehicles = [], action) => {
    switch (action.type) {
        case BUY_BUGGY:
            return [...vehicles, 'Багги'];
        case BUY_TRAK:
            return [...vehicles, 'Трахтор'];
        case BUY_BIKE:
            return [...vehicles, 'Байк'];
        default: {
            return vehicles;
        }
    }
}

export default vehiclesReducer;
