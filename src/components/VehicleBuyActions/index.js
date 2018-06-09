import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IntlProvider, FormattedMessage } from 'react-intl';
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
    language,
    buyBuggy,
    buyTrak,
    buyBike,
    canBuyBuggy,
    canBuyTrak,
    canBuyBike
}) => (
<IntlProvider locale={language}>
    <div>
        <button onClick={buyBuggy} disabled={!canBuyBuggy}><FormattedMessage id='app.buyBuggy' /></button>
        <button onClick={buyTrak} disabled={!canBuyTrak}><FormattedMessage id='app.buyTrak' /></button>
        <button onClick={buyBike} disabled={!canBuyBike}><FormattedMessage id='app.buyBike' /></button>
    </div>
</IntlProvider>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    buyBuggy,
    buyTrak,
    buyBike
  }, dispatch)

const mapStateToProps = state => ({
    language: state.app.language,
    canBuyBuggy: canBuyBuggy(state),
    canBuyTrak: canBuyTrak(state),
    canBuyBike: canBuyBike(state)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VehicleBuyActions);
