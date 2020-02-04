import React from 'react';
import { initialState, reducer } from '../reducers/reducer';

const Task = () => {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <div>
         <p>{state.item}</p>
      </div>
   )
}

export default Task;