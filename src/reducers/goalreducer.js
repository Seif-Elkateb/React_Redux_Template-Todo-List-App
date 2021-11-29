import {ADD_GOAL,REMOVE_GOAL,TOGGLE_GAOL,FETCH_GOALS} from '../actions/types';

const initialState=[]
export const goalReducer=(state=initialState,action)=>{
   switch(action.type){
     case ADD_GOAL:{
       const newItem={
         name:action.payload,
         finished:false
       }
       return [...state,newItem];
     }
     case REMOVE_GOAL:{
       return state.filter(item=>item.name!==action.payload);
     }
     case TOGGLE_GAOL:{
       return state.map(item=>{
         if(item.name===action.payload)
          item.finished=!item.finished;
        return item;
       })
     }
     case FETCH_GOALS:{
       return [...action.payload];
     }
     default:{
       return state;
     }
   } 
}