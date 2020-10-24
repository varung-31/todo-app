import React from "react";
import ListItem from "./ListItem";

function CompleteTaskList() {
    return (
        <div id="complete-tasks">
            <h3>COMPLETED</h3>
            <ul>
                <ListItem text="See the Doctor" isComplete={true}/>
            </ul>
        </div>
    );
}

export default CompleteTaskList;
