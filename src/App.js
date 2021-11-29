
import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/TodoList';
import GoalList from './components/GoalList';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Header/>
    <TodoList/>
    <br/>
    <hr/>
    <br/>
    <GoalList/>
    </div>
    </Provider>
  );
}

export default App;
