import React from 'react';
import TodoTaskList from "./TodoTaskList";
import CompleteTaskList from "./CompleteTaskList";
import AddTask from "./AddTask";
import "./App.css"

function App() {
    return (
        <>
            <h1>My ToDo List</h1>
            <AddTask />
            <TodoTaskList />
            <CompleteTaskList />
        </>
    );
}

export default App;
