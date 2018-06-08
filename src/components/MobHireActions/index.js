import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    buyNob,
    buyBoy,
    buySpanner,
    buySlaver,
    buyYoof,
    buyGrot,
} from '../../actions';

import {
    canBuyNob,
    canBuyYoof,
    canBuyBoy,
    canBuySpanner,
    canBuySlaver,
    canBuyGrot,
} from '../../helpers';

const MobHireActions = ({
    buyNob,
    buyBoy,
    buySpanner,
    buySlaver,
    buyYoof,
    buyGrot,
    canBuyNob,
    canBuyYoof,
    canBuyBoy,
    canBuySpanner,
    canBuySlaver,
    canBuyGrot
}) => (<div>
        <button onClick={buyNob} disabled={!canBuyNob}>Купить Ноба</button>
        <button onClick={buyBoy} disabled={!canBuyBoy}>Купить Боя</button>
        <button onClick={buySpanner} disabled={!canBuySpanner}>Купить Спаннера</button>
        <button onClick={buySlaver} disabled={!canBuySlaver}>Купить Слейвера</button>
        <button onClick={buyYoof} disabled={!canBuyYoof}>Купить Юффа</button>
        <button onClick={buyGrot} disabled={!canBuyGrot}>Купить Грота</button>
</div>)

const mapDispatchToProps = dispatch => bindActionCreators({
    buyNob,
    buyBoy,
    buySpanner,
    buySlaver,
    buyYoof,
    buyGrot
  }, dispatch)

const mapStateToProps = state => ({
    canBuyNob: canBuyNob(state),
    canBuyYoof: canBuyYoof(state),
    canBuyBoy: canBuyBoy(state),
    canBuySpanner: canBuySpanner(state),
    canBuySlaver: canBuySlaver(state),
    canBuyGrot: canBuyGrot(state),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MobHireActions);
