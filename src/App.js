import React, { useState, useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import { initialState, reducer } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTask, setNewTask] = useState('');

  const addNewTask = newTask => {
     dispatch({ type: 'ADD NEW TASK', payload: newTask});
  }

  const toggleCompleted = id => {
     dispatch({ type: 'TOGGLE COMPLETED', payload: id });
  }

  const clearCompleted = () => {
     dispatch({ type: 'CLEAR COMPLETED' });
  }

  return (
    <div className="App">
      <TodoForm addNewTask={addNewTask} clearCompleted={clearCompleted} />
      <TodoList errands={state.errands} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
