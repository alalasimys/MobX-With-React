import { observer } from 'mobx-react-lite';
import './App.css';
import { Test1 } from './test';
import { useStores } from './stores/helpers/use-stores';

function App() {
  const store = useStores();

  return (
    <div className="App">
      <Test1 />
      {store.dataStores.usersStore.users.map((user) => (
        <div>{user}</div>
      ))}
    </div>
  );
}

export default observer(App);
