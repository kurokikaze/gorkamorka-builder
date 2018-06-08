import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    buyBuggy,
    buyTrak,
    buyBike
} from '../../actions';

import {
    canBuyBuggy,
    canBuyTrak,
    canBuyBike
} from '../../helpers';

const VehicleBuyActions =  ({
    buyBuggy,
    buyTrak,
    buyBike,
    canBuyBuggy,
    canBuyTrak,
    canBuyBike
}) => (<div>
    <button onClick={buyBuggy} disabled={!canBuyBuggy}>Купить багги</button>
    <button onClick={buyTrak} disabled={!canBuyTrak}>Купить трахтор</button>
    <button onClick={buyBike} disabled={!canBuyBike}>Купить байк</button>
</div>)

const mapDispatchToProps = dispatch => bindActionCreators({
    buyBuggy,
    buyTrak,
    buyBike
  }, dispatch)

const mapStateToProps = state => ({
    canBuyBuggy: canBuyBuggy(state),
    canBuyTrak: canBuyTrak(state),
    canBuyBike: canBuyBike(state)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VehicleBuyActions);
