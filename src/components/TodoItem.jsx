function TodoItem(props){
    return (
        // <p>{props.title}</p>
        <div style={styles.todoItem}>
            <p>{props.todo.title}</p>
        </div>
    )
}

const styles = {
    todoItem: {
      border: '2px solid #f4f4f4',
      fontSize: '24px',
    },
  }
export default TodoItem;