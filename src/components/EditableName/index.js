import React from 'react';

const defaultState = {
    edited: false,
    currentName: false,
}

class EditableName extends React.Component {
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
            <button onClick={this.beginEdit.bind(this)}>Edit</button>
        </div>)
    }

    renderEdit() {
        return (<div className="editable-name edited">
            <input value={this.state.currentName} onChange={this.setName.bind(this)} />
            <button onClick={this.saveName.bind(this)}>Ok</button>
            <button onClick={this.cancelEdit.bind(this)}>No</button>
        </div>);
    }

    render() {
        return (this.state.edited ? this.renderEdit() : this.renderView());
    }
}

export default EditableName;
