// import React, { useState, useReducer } from 'react';
// import { initialState, reducer } from '../reducers/reducer';
// import Task from './Task';

// const TodoList = () => {
//    const [state, dispatch] = useReducer(reducer, initialState);

//    const clearCompleted = () => {
//       dispatch({ type: 'CLEAR COMPLETED' });
//    }

//    return (
//       <div>
//          {initialState.map(task => (
//             <Task />
//          ))}
//          <button onClick={clearCompleted}>Clear Completed</button>
//       </div>
//    )
// }

// export default TodoList;