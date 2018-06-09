import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {IntlProvider, FormattedMessage} from 'react-intl';
import { switchLanguage } from '../../actions';

import messages from '../../i18n';

import MobHireActions from '../MobHireActions';
import VehicleBuyActions from '../VehicleBuyActions';
import Unit from '../Unit';
import Vehicle from '../Vehicle';

const getAnotherLanguage = language => language === 'ru' ? 'en' : 'ru';

const Builder =  ({
    teef,
    units,
    vehicles,
    language,
    switchLanguage,
}) => (<IntlProvider locale={language} messages={messages[language]}>
    <div>
        <h1><FormattedMessage
            id='app.creation'
        /> [{language}<button onClick={() => switchLanguage(getAnotherLanguage(language))}>{getAnotherLanguage(language)}</button>]</h1>
        <h3>
            <FormattedMessage
                id='app.teefLeft'
                values={{
                    teef
                }}
            />
        </h3>
        <div>
            <h4><FormattedMessage id='app.mob' /></h4>
            <ul>
            {units.map(id => <Unit id={id} />)}
            </ul>
            <h4><FormattedMessage id='app.vehicles' /></h4>
            <ul>
            {vehicles.map(id => <Vehicle id={id} />)}
            </ul>
        </div>
        <div>
            <h4><FormattedMessage id='app.orksAndGrots' /></h4>
            <MobHireActions />
        </div>
        <div>
            <h4><FormattedMessage id='app.vehicles' /></h4>
            <VehicleBuyActions />
        </div>
    </div>
</IntlProvider>)

const mapStateToProps = state => ({
    teef: state.teef,
    units: state.units.map(unit => unit.id),
    vehicles: state.vehicles.map(vehicle => vehicle.id),
    items: state.items,
    language: state.app.language,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    switchLanguage,
  }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Builder);
