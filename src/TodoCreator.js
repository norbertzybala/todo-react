import { Component } from "react";

export class TodoCreator extends Component {

    constructor(props) {
        super(props);
        this.state = { newItemText: ""}
    }

    updateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value });
    }

    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({newItemText: "" });
    }

    render = () =>
        <div className="my-1">
            <input className="form-control" value={this.state.newItemText} onChange={this.updateNewTextValue}></input>
            <button className="btn btn-primary mt-2 mb-2" onClick={this.createNewTodo}>Dodaj</button>
        </div>
}