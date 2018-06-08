import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    buyBuggy,
    buyTrak,
    buyBike
} from '../../actions';

import MobHireActions from '../MobHireActions';
import VehicleBuyActions from '../VehicleBuyActions';
import Unit from '../Unit';
import Vehicle from '../Vehicle';

import {
    canBuyBuggy,
    canBuyTrak,
    canBuyBike
} from '../../helpers';

const Builder =  ({
    teef,
    units,
    vehicles,
    buyBuggy,
    buyTrak,
    buyBike,
    canBuyBuggy,
    canBuyTrak,
    canBuyBike
}) => (<div>
    <h1>Создание</h1>
    <h3>{teef} зубов осталось</h3>
    <div>
        <h4>Моб</h4>
        <ul>
        {units.map(id => <Unit id={id} />)}
        </ul>
        <h4>Техника</h4>
        <ul>
        {vehicles.map(id => <Vehicle id={id} />)}
        </ul>
    </div>
    <div>
        <h4>Орки и гроты</h4>
        <MobHireActions />
    </div>
    <div>
        <h4>Машины</h4>
        <VehicleBuyActions />
    </div>
    
</div>)

const mapDispatchToProps = dispatch => bindActionCreators({
    buyBuggy,
    buyTrak,
    buyBike
  }, dispatch)

const mapStateToProps = state => ({
    teef: state.teef,
    units: state.units.map(unit => unit.id),
    vehicles: state.vehicles.map(vehicle => vehicle.id),
    items: state.items,
    canBuyBuggy: canBuyBuggy(state),
    canBuyTrak: canBuyTrak(state),
    canBuyBike: canBuyBike(state)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Builder);
