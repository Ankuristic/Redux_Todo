import { ADD_TODO,DELETE_TODO } from "../Action/action";

const ankurState={
    todo:[]
}


function todoReducer (state=ankurState, action){
    switch(action.type){
        case ADD_TODO:
            console.log('Action:', action); // Log the action
             console.log('State before:', state); // Log state before update
            return {
                ...state,
                todo:[
                    ...state.todos, action.payload
                ],
                //action.payload
            };
            // console.log('State after:', newStateAfterAdd); // Log state after update

            // const newStateAfterAdd = {
            //     ...state,
            //     todos: [...state.todos, action.payload],
            //   };
            //   console.log('State after:', newStateAfterAdd); // Log state after update
            //   return newStateAfterAdd;
            default:
                return state
    }
}


export default todoReducer;