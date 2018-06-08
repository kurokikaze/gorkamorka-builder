import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    deleteUnit,
} from '../../actions';

// import {
//     canBuyNob,
//     canBuyYoof,
//     canBuyBoy,
//     canBuySpanner,
//     canBuySlaver,
//     canBuyGrot,
// } from '../../helpers';

const Unit = ({
    unit,
    deleteUnit
}) => (
    <li key={`unit_${unit.id}`}>
        <span>{unit.name}</span>
        <button onClick={() => deleteUnit(unit.id)}>Удалить</button>
    </li>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteUnit,
  }, dispatch)

const mapStateToProps = (state, props) => ({
    unit: state.units.find(unit => unit.id === props.id),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Unit);


