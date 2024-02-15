import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 

function Redux() {
    // useSelector(callBackFunction)
    // callBackFunction này có tham số là state của redux store
    // Giá trị return bên trong callback sẽ được chuyển đổi thành state của component
    const {count, todos} = useSelector((state) => {

        const todos = state.toDoReducer.todos;
        const count = state.countReducer.count;
        

        return {count, todos};
    })

    // useDispatch return về dispatch function
    // Dùng dispatch function để gửi action lên redux store
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        const title = prompt("Input your todo: ")
        const todo = {
            id: Math.floor(Math.random() * 100),
            title,
            isCompleted: false,
        }

        // Làm sao để thêm object todo vào array todos trong todoReducer
        dispatch({type: "todo/add_todo", payload: todo})
    }
    

    const handleRemoveTodo = (id) => {
        dispatch({type: "todo/remove_todo", id: id})
    }

    const handleUpdateTodo = (id) => {
        dispatch({type: "todo/update_todo", id: id})
    }
    
  return (
    <div>
        <h1>Redux</h1>

        <p>Count: {count}</p>
        <button className='btn btn-success' onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button className='btn btn-danger' onClick={() => dispatch({type: 'decrement'})}>Decrement</button>

        <hr />
        <div>
        <p>Todos</p>
        <input type="text" />
        <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        
        <ul>
            {todos.map((todo) => {
                return <li key={todo.id}>
                <span className='me-2' style={{
                    cursor: "pointer",
                    textDecoration: todo.isCompleted ? "line-through" : 'none'
                }}
                onClick={() => handleUpdateTodo(todo.id)}>
                    {todo.title}
                </span>
                <button className='btn btn-danger' onClick={()=> handleRemoveTodo(todo.id)}>X</button>
                </li>  
            })}
        </ul>
    </div>
  )
}

export default Redux