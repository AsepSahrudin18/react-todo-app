import React from "react";
import TodoItem from "./TodoItem";

function Todos(props){
    
    return (
        <div>
            <h1>This is Todos component</h1>

            {props.todos.map((todo) => {
                // return <p key={todo.id}>{todo.title}</p>
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    )
}

export default Todos;