function TodoItem(props){
    console.log(props)
    return (
        // <p>{props.title}</p>
        <p>{props.todo.title}</p>
    )
}

export default TodoItem;