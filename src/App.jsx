import { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);

  // Definisikan toggleCompleted di sini
  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  const deleteTodo = (id) => {
    const deleteTodos = todos.filter(todo => {return todo.id !== id} );
    setTodos(deleteTodos);
  }

  return ( 
    <div style={styles.container}>
      <h1 style={styles.title}>My Todolist</h1>
      {/* Teruskan function toggleCompleted ke component Todos */}  
    <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
    </div>
   );
}


const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App;