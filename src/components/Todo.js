import React from "react";
import "./Todo.css";

const Todo = props => {
    return (
        <div
            onClick={() => props.toggleTask(props.task.id)}
            style={{ textDecoration: `${props.task.completed ? "line-through" : ""}` }}
        // className={`task${props.task.completed ? " completed" : ""}`}

        >
            <p>{props.task.task}</p>
        </div>
    );
};

export default Todo;
