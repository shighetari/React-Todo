import React from "react";

class TodoForm extends React.Component {
    // Constructor with state
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    handleChanges = e => {
        // update state with each keystroke
        this.setState({
            task: e.target.value
        });
    };

    // class property to submit form
    // create a function to handle the form submit
    // inside that function, call the addItem function from props
    // and pass in the item state property
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: "",
            className: "task-item"
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
                <input className="input"
                    placeholder="add your task here"
                    type="text"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChanges}
                />
                <div> </div>
                <button className="add-button"><span>Add</span></button>
            </form>
        );
    }
}

export default TodoForm;
