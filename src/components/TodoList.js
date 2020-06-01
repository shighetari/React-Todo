// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo"

const TodoList = props => {

    return (

        <div className="todo-list">

            {props.samplelist.map(item => (
                <div className="task-item" style={{width:'20%'}}>
                    <Todo toggleTask={props.toggleTask} key={item.id} task={item} />
                </div>
            ))}


            <button className="button" onClick={props.clearCompletedTask}><span>
                Clear
                </span>
            </button>
        </div>
    );
};

export default TodoList;
