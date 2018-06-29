export const unitType = {
    nob: 'NOB',
    boy: 'BOY',
    spanner: 'SPANNER',
    slaver: 'SLAVER',
    yoof: 'YOOF',
    grot: 'GROT',
};

export const vehicleType = {
    buggy: 'VEHICLE_TYPE_BUGGY',
    trak: 'VEHICLE_TYPE_TRAK',
    bike: 'VEHICLE_TYPE_BIKE',
};

export const itemType = {
    gun: 'ITEM_TYPE_GUN',
    armor: 'ITEM_TYPE_ARMOR',
    tool: 'ITEM_TYPE_TOOL',
    grenade: 'ITEM_TYPE_GRENADE',
};

export const orkTypes = [
    unitType.nob,
    unitType.boy,
    unitType.spanner,
    unitType.slaver,
    unitType.yoof,
];

export const getUnitNameByType = type => {
    switch (type) {
        case unitType.nob:
            return 'Ноб';
        case unitType.boy:
            return 'Бой';
        case unitType.spanner:
            return 'Спаннер';
        case unitType.slaver:
            return 'Слейвер';
        case unitType.yoof:
            return 'Юфф';
        case unitType.grot:
            return 'Грот';
        default:
            return 'Неизвестный тип';
    }
}

export const getVehicleNameByType = type => {
    switch (type) {
        case vehicleType.buggy:
            return 'Багги';
        case vehicleType.trak:
            return 'Трахтор';
        case vehicleType.bike:
            return 'Байк';
        default:
            return 'Неизвестный тип';
    }
}

export const bikesPerSpanner = 3;

export const startingTeef = 100;

export const defaultLanguage = 'ru';