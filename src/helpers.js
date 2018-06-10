import {
    nobCost,
    boyCost,
    spannerCost,
    slaverCost,
    yoofCost,
    grotCost,
    buggyCost,
    trakCost,
    bikeCost    
} from './const/costs';
import {
    orkTypes,
    bikesPerSpanner,
    unitType,
    vehicleType
} from './const';

export const findOrks = units => units.filter(unit => orkTypes.includes(unit.type))

const countYoof = units => units.filter(unit => unit.type === unitType.yoof).length;
const countOrks = units => findOrks(units).length;
const countGrots = units => units.filter(unit => unit.type === unitType.grot).length;
const countSpanners = units => units.filter(unit => unit.type === unitType.spanner).length;

const countBigWheels = vehicles => vehicles.filter(vehicle => vehicle.type === vehicleType.buggy || vehicle.type === vehicleType.trak).length;
const countBikes = vehicles => vehicles.filter(vehicle => vehicle.type === vehicleType.bike).length;

const countNeededSpanners = vehicles => (countBigWheels(vehicles) + Math.ceil(countBikes(vehicles) / bikesPerSpanner));
const createSimpleCostCheck = cost => ({teef}) => (teef >= cost);

// Ограничители найма
export const canBuyNob = ({teef, units}) => (teef >= nobCost && !units.find(unit => unit.type === unitType.nob));
export const canBuyBoy = createSimpleCostCheck(boyCost);
export const canBuySpanner = createSimpleCostCheck(spannerCost);
export const canBuySlaver = createSimpleCostCheck(slaverCost);
export const canBuyGrot = ({teef, units}) => (
    teef >= grotCost && // Достаточно зубов
    units.find(u => u.type === unitType.slaver) && // Есть хотя бы один Слейвер
    (countOrks(units) > countGrots(units)) // Орков больше чем гротов
);
export const canBuyYoof = ({teef, units}) => (
    teef >= yoofCost && // Достаточно зубов
    (Math.ceil(countOrks(units) / 2) > countYoof(units)) // Юффов может быть не больше половины от общего числа Орков
);

// Ограничители покупки техники
export const canBuyBuggy = ({teef, units, vehicles}) => (
    teef >= buggyCost && // Достаточно зубов для покупки
    countNeededSpanners(vehicles) < countSpanners(units) && // Достаточно спаннеров чтобы обслуживать
    vehicles.length < units.length // Есть кому управлять
);
export const canBuyTrak = ({teef, units, vehicles}) => (
    teef >= trakCost && // Достаточно зубов для покупки
    countNeededSpanners(vehicles) < countSpanners(units) && // Достаточно спаннеров чтобы обслуживать
    vehicles.length < units.length // Есть кому управлять
);
export const canBuyBike = ({teef, units, vehicles}) => (
    teef >= bikeCost && // Достаточно зубов для покупки
    countNeededSpanners([...vehicles, {type: vehicleType.bike}]) <= countSpanners(units) && // Достаточно спаннеров чтобы обслуживать
    vehicles.length < units.length // Есть кому управлять
);

export const filterAvailableOrks = (state, currentOrk) => {
    const takenDrivers = state.vehicles.map(({driver}) => driver !== currentOrk ? driver : null).filter(Boolean);
    const takenGunners = state.vehicles.map(({gunner}) => gunner !== currentOrk ? gunner : null).filter(Boolean);
    
    const takenOrks = [...takenDrivers, ...takenGunners];

    return findOrks(state.units).filter(u => !takenOrks.includes(u.id));
}