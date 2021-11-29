import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTyps from 'prop-types';
import { addGoalAction,removeGoalAction,toggleGoalAction,getGoalsAction} from '../actions/goalactions';


class GoalList extends Component {
  constructor(props){
    super(props);
    this.state={
      goal:''
    }
  }
  componentDidMount(){
    this.props.dispatch(getGoalsAction());
  }
  handleChange=(e)=>{
    this.setState({
      goal:e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.goal==='')
    {
      alert('can not add empty goal item');
      return;
    }
    this.props.dispatch(addGoalAction(this.state.goal));
    this.setState({
      goal:''
    })
  }
  removeItem=(e)=>{

    this.props.dispatch(removeGoalAction(e.target.name))
  }
  toggleGoal=(e)=>{
    this.props.dispatch(toggleGoalAction(e.target.getAttribute('name')));
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>Add new Goal</label>
      <br/>
      <input  className='goal-input' placeholder='new goal' type='text'name ='goal' value={this.state.goal} onChange={this.handleChange}/>
      <br/>
      <button type='submit'>Add</button>
      </form>
      <div>
      {
        this.props.goals.map((item,i)=>(<div className='list-container'key={i} name={item.name}><button name={item.name} className='list-remove-btn' onClick={this.removeItem}>X</button><div name={item.name} onClick={this.toggleGoal} style={item.finished?{textDecoration:'line-through'}:{}} className='list-item'>{item.name}</div></div>))
      }
      </div>   
      </div>
    )
  }
}
GoalList.propTypes={
  goals:PropTyps.array.isRequired
}
const mapStateToProps=state=>({
  goals:state.goals
})
export default connect(mapStateToProps)(GoalList)
