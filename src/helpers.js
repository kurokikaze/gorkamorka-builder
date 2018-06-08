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
    orkz,
    bikesPerSpanner
} from './const';

const countYoof = units => units.filter(unit => unit === 'Юфф').length;
const countOrks = units => units.filter(unit => orkz.includes(unit)).length;
const countGrots = units => units.filter(unit => unit === 'Грот').length;
const countSpanners = units => units.filter(unit => unit === 'Спаннер').length;

const countBigWheels = vehicles => vehicles.filter(vehicle => vehicle === 'Багги' || vehicle === 'Трахтор').length;
const countBikes = vehicles => vehicles.filter(vehicle => vehicle === 'Байк').length;

const countNeededSpanners = vehicles => (countBigWheels(vehicles) + Math.ceil(countBikes(vehicles) / bikesPerSpanner));
const createSimpleCostCheck = cost => ({teef}) => (teef >= cost);

// Ограничители найма
export const canBuyNob = ({teef, units}) => (teef >= nobCost && !units.includes('Ноб'));
export const canBuyBoy = createSimpleCostCheck(boyCost);
export const canBuySpanner = createSimpleCostCheck(spannerCost);
export const canBuySlaver = createSimpleCostCheck(slaverCost);
export const canBuyGrot = ({teef, units}) => (
    teef >= grotCost && // Достаточно зубов
    units.includes('Слейвер') && // Есть хотя бы один Слейвер
    (countOrks(units) > countGrots(units)) // Орков больше чем гротов
);
export const canBuyYoof = ({teef, units}) => (teef >= yoofCost && (Math.ceil(countOrks(units) / 2) > countYoof(units)));

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
    countNeededSpanners([...vehicles, 'Байк']) <= countSpanners(units) && // Достаточно спаннеров чтобы обслуживать
    vehicles.length < units.length // Есть кому управлять
);