import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO,FETCH_TODOS} from '../actions/types';
const initialState=[]
export const todoReducer=(state=initialState,action)=>{
   switch(action.type){
     case ADD_TODO:{
       const newItem={
         name:action.payload,
         finished:false
       }
       return [...state,newItem];
     }
     case REMOVE_TODO:{
       return state.filter(item=>item.name!==action.payload);
     }
     case TOGGLE_TODO:{
       console.log(action.payload);
       return state.map(item=>{
         if(item.name===action.payload)
          item.finished=!item.finished;
        return item;
       })
     }
     case FETCH_TODOS:{
       return [...action.payload]
     }
     default:{
       return state;
     }
   } 
}