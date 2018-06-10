import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import bigGunz from '../../const/bigGunz'

const defaultState = {
    edited: false,
    currentName: false,
}

class BigGunSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = defaultState;
    }

    beginEdit() {
        this.setState({edited: true, currentName: this.props.name});
    }

    cancelEdit() {
        this.setState({edited: false, currentName: this.props.name});
    }

    saveName() {
        this.props.onSave(this.state.currentName);
        this.setState({edited: false});
    }

    setName(event) {
        this.setState({currentName: event.target.value});
    }

    renderView() {
        return (<div className="editable-name">
            <span className="name">{this.props.name}</span>
            <button onClick={this.beginEdit.bind(this)}><FormattedMessage id='app.edit' /></button>
        </div>)
    }

    renderEdit() {
        return (<div className="editable-name edited">
            <input value={this.state.currentName} onChange={this.setName.bind(this)} />
            <button onClick={this.saveName.bind(this)}><FormattedMessage id='app.ok' /></button>
            <button onClick={this.cancelEdit.bind(this)}><FormattedMessage id='app.cancel' /></button>
        </div>);
    }

    render() {
        return (<IntlProvider locale={this.props.language}>
            {this.state.edited ? this.renderEdit() : this.renderView()}
        </IntlProvider>);
    }
}

export default UnitSelector;
