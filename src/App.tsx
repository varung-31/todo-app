import React from 'react';
import TodoTaskList from "./TodoTaskList";
import CompleteTaskList from "./CompleteTaskList";

function App() {
  return (
      <div id="main-container">
        <TodoTaskList />
        <CompleteTaskList />
      </div>
  );
}

export default App;
