import React from 'react';
import TodoTaskList from "./TodoTaskList";
import CompleteTaskList from "./CompleteTaskList";
import "./App.css"

function App() {
  return (
      <>
        <TodoTaskList />
        <CompleteTaskList />
      </>
  );
}

export default App;
