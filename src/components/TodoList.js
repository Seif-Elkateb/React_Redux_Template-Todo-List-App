import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodoAction,removeTodoAction,toggleTodoAction,getTodosAction } from '../actions/todoactions';


class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      todo:''
    }
  }
  componentDidMount(){
    this.props.dispatch(getTodosAction());
  }
  handleChange=(e)=>{
    this.setState({
      todo:e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.todo==='')
    {
      alert('can not add empty todo item');
      return;
    }
    this.props.dispatch(addTodoAction(this.state.todo));
    this.setState({
      todo:''
    })
  }
  removeItem=(e)=>{

    this.props.dispatch(removeTodoAction(e.target.name))
  }
  toggleTodo=(e)=>{
    this.props.dispatch(toggleTodoAction(e.target.getAttribute('name')));
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>Add new Todo</label>
      <br/>
      <input  className='todo-input' placeholder='new todo' type='text'name ='todo' value={this.state.todo} onChange={this.handleChange}/>
      <br/>
      <button type='submit'>Add</button>
      </form>
      <div>
      {
        this.props.todos.map((item,i)=>(<div className='list-container'key={i} name={item.name}><button name={item.name} className='list-remove-btn' onClick={this.removeItem}>X</button><div name={item.name} onClick={this.toggleTodo} style={item.finished?{textDecoration:'line-through'}:{}} className='list-item'>{item.name}</div></div>))
      }
      </div>   
      </div>
    )
  }
}
TodoList.propTypes={
  todos:PropTypes.array.isRequired

}
const mapStateToProps=state=>({
  todos:state.todos
})
export default connect(mapStateToProps)(TodoList)
