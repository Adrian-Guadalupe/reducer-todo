export const initialState = {
   errands:[
   {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
   }
   ]
}

export const reducer = (state, action) => {
   switch (action.type) {
      case 'ADD NEW TASK' : 
         return {
            ...state,
               errands: [
                  ...state.errands,
                  {
                     item: action.payload,
                     completed: false,
                     id: Date.now()
                  }
               ]
            }
      case 'CLEAR COMPLETED' :
         return {
            ...state,
            errands: state.errands.filter(task => {
               return !task.completed;
            })
         }
      case 'TOGGLE COMPLETED' :
         return {
            ...state,
            errands: state.errands.map(task => {
               if (task.id === action.payload) {
                  return {
                     ...task,
                     completed: !task.completed
                  }}
               return task
            })
         }
      default: return state;
   }
}