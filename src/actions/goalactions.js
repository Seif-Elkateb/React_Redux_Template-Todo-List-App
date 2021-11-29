import {ADD_GOAL,REMOVE_GOAL,TOGGLE_GAOL,FETCH_GOALS} from './types';
import { getGoals } from '../fake_api';

export const addGoalAction=(item)=>{
  return {
    type:ADD_GOAL,
    payload:item,
  }
}
export const removeGoalAction=(item)=>{
  return {
    type:REMOVE_GOAL,
    payload:item,
  }
}
export const toggleGoalAction=(item)=>{
  return {
    type:TOGGLE_GAOL,
    payload:item,
  }
}
export const getGoalsAction=()=>dispatch=>{
  getGoals().then(goals=>{
    dispatch({
      type:FETCH_GOALS,
      payload:goals
    })
  })
}