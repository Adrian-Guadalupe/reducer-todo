import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const TodoForm = () => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const [newTask, setNewTask] = useState('');

   const addNewTask = () => {
      dispatch({ type: 'ADD NEW TASK', payload: newTask});
   }

   const handleChanges = e => {
      setNewTask(e.target.value);
   }

   const toggleCompleted = () => {
      dispatch({ type: 'TOGGLE COMPLETED'});
   }

   const clearCompleted = () => {
      dispatch({ type: 'CLEAR COMPLETED' });
   }

   return (
      <div>
         <input
            className='new-task'
            type='text'
            name='newTaskInput'
            value={newTask}
            onChange={handleChanges}
         />
         <button onClick={addNewTask}>Add Task</button>
         <div>
            {state.map(task => {
               return (
                  <div>
                     <p 
                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                        onClick={toggleCompleted}
                     >
                        {task.item}
                     </p>
                  </div>
               )
            })}
         </div>
         <button onClick={clearCompleted}>Clear Completed</button>
      </div>
   )
}

export default TodoForm;