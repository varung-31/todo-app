import React from "react";
import ListItem from "./ListItem";

function TodoTaskList() {
    return (
        <div id="incomplete-tasks">
            <h3>TODO</h3>
            <ul>
                <ListItem text="Pay Bills" />
                <ListItem text="Go Shopping"/>
            </ul>
        </div>
    );
}

export default TodoTaskList;
