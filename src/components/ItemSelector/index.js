import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormattedMessage, IntlProvider } from 'react-intl';
import Select from 'react-select';

import {
    buyItem,
} from '../../actions';

import {itemType} from '../../const';
import {gunz} from '../../const/gunz';
import {armor} from '../../const/armor';
import {grenades} from '../../const/grenades';
// import slaverTools from '../../const/slaverTools';

import {selectStyle} from './style.emo';

const gunToOption = gun => ({
    label: <FormattedMessage id={gun.name} />,
    itemType: itemType.gun,
    value: gun.type,
});

const armorToOption = armor => ({
    label: <FormattedMessage id={armor.name} />,
    itemType: itemType.armor,
    value: armor.type,
});

const grenadeToOption = grenade => ({
    label: <FormattedMessage id={grenade.name} />,
    itemType: itemType.grenade,
    value: grenade.type,
});

const gunOptions = gunz.map(gunToOption);
const armorOptions = armor.map(armorToOption);
const grenadeOptions = grenades.map(grenadeToOption);

const ItemSelector = ({
    language,
    buyItem,
    unit
}) => (
    <IntlProvider locale={language}>
        <Select
            id={`add_item_unit${unit.id}`}
            onChange={({itemType, value}) => buyItem(unit.id, itemType, value)}
            options={[ ...gunOptions, ...armorOptions, ...grenadeOptions ]}
            searchable={false}
            styles={selectStyle}
            value={''}
        />
    </IntlProvider>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    buyItem
  }, dispatch)

const mapStateToProps = state => ({
    language: state.app.language
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ItemSelector);
