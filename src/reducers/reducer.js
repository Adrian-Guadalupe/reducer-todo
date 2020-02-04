export const initialState = [
   {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
   }
]

export const reducer = (state, action) => {
   switch (action.type) {
      case 'ADD NEW TASK' : 
         return [
            ...state,
               {
                  item: action.payload,
                  completed: false,
                  id: Date.now()
               }
         ]
      case 'CLEAR COMPLETED' :
         return [
            ...state,
            state.filter(task => {
               return !task.completed;
            })
         ]
      // case 'TOGGLE COMPLETED' :
      //    return [
      //       ...state,
      //       state.map(task => {
      //          return 
      //       })  
      //    ]
      default: return state;
   }
}