import { useState } from "react";

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

  console.log(todos);

  return ( 
    <>
      <h1>My Todolist</h1>

      {/* Gunakan method map di sini */}
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })}
    </>
   );
}

export default App;