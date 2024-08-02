import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <h1
        style={{
          color: '#333',
          marginBottom: '20px',
        }}
      >
        Список задач
      </h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
