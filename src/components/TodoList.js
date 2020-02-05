import React from 'react';
import Task from './Task';

const TodoList = ({ errands, toggleCompleted }) => {
   return (
      <ol>
         {errands.map(task => (
            <li>
               <Task
                  key={task.id}
                  task={task}
                  toggleCompleted={toggleCompleted}
               />
            </li> 
         ))}
      </ol>
   )
}

export default TodoList;