function countReducer(state = {count: 0}, action){
    console.log("State: ", state);
    console.log("Action: ", action);
    
    switch(action.type){
        case 'increment':
            return {...state, count: state.count + 1}
        case 'decrement':
            return {...state, count: state.count - 1}
            
        default:
            return state;
    }
    
}

export default countReducer;