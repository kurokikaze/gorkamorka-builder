import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IntlProvider, FormattedMessage } from 'react-intl';

import EditableName from '../EditableName';
import ItemSelector from '../ItemSelector';

import {getUnitNameByType} from '../../const';
import {
    deleteUnit,
    renameUnit,
} from '../../actions';

const Unit = ({
    unit,
    language,
    deleteUnit,
    renameUnit
}) => (
<IntlProvider locale={language}>
    <li key={`unit_${unit.id}`}>
        <EditableName name={unit.name} onSave={name => renameUnit(unit.id, name)} language={language} />
        {(getUnitNameByType(unit.type) !== unit.name) && <div className="unitType">{getUnitNameByType(unit.type)}</div>}
        <ItemSelector unit={unit} />
        <button onClick={() => deleteUnit(unit.id)}><FormattedMessage id='app.delete' /></button>
    </li>
</IntlProvider>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteUnit,
    renameUnit,
  }, dispatch)

const mapStateToProps = (state, props) => ({
    language: state.app.language,
    unit: state.units.find(unit => unit.id === props.id),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Unit);


