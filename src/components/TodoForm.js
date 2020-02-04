import React, { useState } from 'react';

const TodoForm = (props) => {
   const [todo, setTodo] = useState('');

   const handleChanges = e => {
      setTodo(e.target.value);
   }

   const handleSubmit = e => {
      e.preventDefault();
      props.addNewTask(todo);
      setTodo('');
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               className='new-task'
               type='text'
               name='newTaskInput'
               value={todo}
               onChange={handleChanges}
            />
            <button>Add Task</button>
         </form>
         <button onClick={props.clearCompleted}>Clear Completed</button>
      </div>
   )
}

export default TodoForm;