function TodoItem(props){
    // Definisikan function getTodoTitleStyle di sini
  const getTodoTitleStyle = () => {
    if (props.todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
  }
    return (
        // <p>{props.title}</p>
        <div style={styles.todoItem}>
             {/* Menambahkan checkbox */}
             <input 
                type="checkbox" 
                style={styles.checkbox} 
                // Jalankan function toggleCompleted ketika checkbox di-klik
                onChange={() => props.toggleCompleted(props.todo.id)}
             />

            <p style={getTodoTitleStyle()}>{props.todo.title}</p>

            {/* Tambahkan sebuah button di sini */}
            <button onClick={() => props.deleteTodo(props.todo.id)} style={styles.button}>x</button>
        </div>
    )
}

const styles = {
    todoItem: {
      border: '2px solid #f4f4f4',
      fontSize: '24px',
      // Tambahkan styles di bawah ini
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    // Tambahkan styles di bawah ini
    checkbox: {
        marginRight: '10px',
        height: '18px',
        width: '18px',
    },
    button: {
      backgroundColor: '#BB0000',
      color: '#fff',
      height: '30px',
      width: '30px',
      borderRadius: '100%',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
    },
    
  }
export default TodoItem;