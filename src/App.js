import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Operations from './components/Operations';
import StatsTasks from './components/StatsTasks';

function App() {
  return (
    <div className="container">
      <div className='content'>
        <AddTask />
        <ListTask />
        <Operations />
        <StatsTasks />
      </div>
    </div>
  );
}

export default App;
