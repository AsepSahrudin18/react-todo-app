import React from "react";
import TodoItem from "./TodoItem";

function Todos(props){

    return (
        <div style={styles.container}>
            <h1>This is Todos component</h1>

            {props.todos.map((todo) => {
                // return <p key={todo.id}>{todo.title}</p>
                return <TodoItem key={todo.id} todo={todo} toggleCompleted={props.toggleCompleted} deleteTodo={props.deleteTodo}/>
            })}
        </div>
    )
}

const styles = {
    container: {
      width: '40%',
      margin: '0 auto',
    },
  }
  

export default Todos;