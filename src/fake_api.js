const todosList=[{name:'exercise',finished:false},{name:'read book',finished:false},{name:'go to college',finished:false},{name:'hangout with friends',finished:false}]
const goalsList=[{name:'graduate from college',finished:false},{name:'travel the world',finished:false},{name:'get a good job',finished:false}];

const  todos = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(todosList);
  }, 1000);
});
 const goals = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(goalsList);
  }, 1000);
});

export const getTodos=()=>todos;
export const getGoals=()=>goals;

