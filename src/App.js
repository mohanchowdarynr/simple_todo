import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase';
import firebase from 'firebase';
import TodoListItem from './Todo';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  useEffect(() => {
    getTodos();
  }, []); 

  function getTodos() {
    db.collection('todos').onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();

    db.collection('todos').add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput('');
  }

  return (
    <>
      <div className="App" >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <h1 style={{color: "#EF4444"}}>Todo note</h1>
          <form>
            <input
              id="standard-basic"
              placeholder="Any thought keep that stored here"
              value={todoInput}
              style={{ width: '90vw', maxWidth: '500px' }}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              onClick={addTodo}
              style={{}}
            >
              Save
            </Button>
          </form>

          <div style={{ width: '90vw', maxWidth: '500px', marginTop: '24px' }}>
            {todos.map((todo) => (
              <TodoListItem
                todo={todo.todo}
                inprogress={todo.inprogress}
                id={todo.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
