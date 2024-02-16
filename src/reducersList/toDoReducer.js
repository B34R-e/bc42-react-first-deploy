function toDoReducer(state = {todos: []}, action){
    switch(action.type){
        case ("todo/add_todo"):{
            const newTodos = [...state.todos, action.payload];
            return {...state, todos: newTodos}
        }
        case ("todo/remove_todo"):
            const newTodos = [...state.todos.filter((todo) => todo.id != action.id)]
            return {...state, todos: newTodos};
        case ("todo/update_todo"):{
            const newTodos = state.todos.map((todo) => {
                if(todo.id == action.id){
                    return {...todo, isCompleted: !todo.isCompleted}
                }
                return todo;
            })
            return {...state, todos: newTodos};
        }
        default:
            return state;
    }
}

export default toDoReducer;