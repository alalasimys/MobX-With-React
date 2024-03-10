// # Create a Root store with UI and Data stores
// # Add User Domain Object
// # Should Have Id + Name
// # Connect Todo to a User
// # We should be able to get all users todos
// # Add Users Domain Store
// # Add ability to add/remove users
// (remember that removing user will also remove all of his todos)
// # Add new todo for each user created
// # Add a UI store to indicate how many users(print names)
// and todos we have in total

import RootStore from './stores/root-store';

const rootStore = new RootStore();

// create 4 users
rootStore.dataStores.usersStore.addUser('Georgy');
rootStore.dataStores.usersStore.addUser('Student 1');
rootStore.dataStores.usersStore.addUser('Student 2');
rootStore.dataStores.usersStore.addUser('Student 3');

// lets take the user so we can do actions on him
const newUser = rootStore.dataStores.usersStore.getUser('Georgy');

// let's add some todos to the user
rootStore.dataStores.todoStore.addTodo('Finish The Exercise', newUser.id);
rootStore.dataStores.todoStore.addTodo('Learn MobX!', newUser.id);

console.log(`${newUser.name} Todos: ${newUser.todos.map((todo) => todo.name)}`);

// now we remove him
rootStore.dataStores.usersStore.removeUser('Georgy');
