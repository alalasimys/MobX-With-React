import { observer } from 'mobx-react-lite';
import './App.css';
import { Test1 } from './test';

function App() {
  return (
    <div className="App">
      <Test1 />
    </div>
  );
}

export default observer(App);
