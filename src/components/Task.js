import React from 'react';

const Task = ({ task, toggleCompleted }) => {
   return (
      <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }} onClick={()=> toggleCompleted(task.id)}>
         <p>
            {task.item}
         </p>
      </div>
   )
}

export default Task;