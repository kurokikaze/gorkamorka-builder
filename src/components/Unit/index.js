import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditableName from '../EditableName'
import {getUnitNameByType} from '../../const';
import {
    deleteUnit,
    renameUnit,
} from '../../actions';

const Unit = ({
    unit,
    deleteUnit,
    renameUnit
}) => (
    <li key={`unit_${unit.id}`}>
        <EditableName name={unit.name} onSave={name => renameUnit(unit.id, name)} />
        {(getUnitNameByType(unit.type) !== unit.name) && <div className="unitType">{getUnitNameByType(unit.type)}</div>}
        <button onClick={() => deleteUnit(unit.id)}>Удалить</button>
    </li>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteUnit,
    renameUnit,
  }, dispatch)

const mapStateToProps = (state, props) => ({
    unit: state.units.find(unit => unit.id === props.id),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Unit);


