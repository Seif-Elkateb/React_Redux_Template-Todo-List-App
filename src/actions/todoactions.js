import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO,FETCH_TODOS} from './types';
import { getTodos } from '../fake_api';

export const addTodoAction=(item)=>{
  return {
    type:ADD_TODO,
    payload:item,
  }
}
export const removeTodoAction=(item)=>{
  return {
    type:REMOVE_TODO,
    payload:item,
  }
}
export const toggleTodoAction=(item)=>{
  return {
    type:TOGGLE_TODO,
    payload:item,
  }
}

export const getTodosAction=()=>dispatch=>{
  getTodos().then(todos=>{
    dispatch({
      type:FETCH_TODOS,
      payload:todos
    })
  })
}
