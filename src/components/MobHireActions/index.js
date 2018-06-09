import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormattedMessage, IntlProvider } from 'react-intl';
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
    language,
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
}) => (
    <IntlProvider locale={language}>
        <div>
            <button onClick={buyNob} disabled={!canBuyNob}><FormattedMessage id='app.buyNob' /></button>
            <button onClick={buyBoy} disabled={!canBuyBoy}><FormattedMessage id='app.buyBoy' /></button>
            <button onClick={buySpanner} disabled={!canBuySpanner}><FormattedMessage id='app.buySpanner' /></button>
            <button onClick={buySlaver} disabled={!canBuySlaver}><FormattedMessage id='app.buySlaver' /></button>
            <button onClick={buyYoof} disabled={!canBuyYoof}><FormattedMessage id='app.buyYoof' /></button>
            <button onClick={buyGrot} disabled={!canBuyGrot}><FormattedMessage id='app.buyGrot' /></button>
        </div>
    </IntlProvider>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    buyNob,
    buyBoy,
    buySpanner,
    buySlaver,
    buyYoof,
    buyGrot
  }, dispatch)

const mapStateToProps = state => ({
    language: state.app.language,
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
