import axios from 'axios';
import React, {useReducer, useEffect} from 'react'

// function reducer(state, action){
//   // console.log("State:", state, " Action:", action);
//   switch(action.type){
//     case 'increase':
//       return state + 1;
//     case 'decrease':
//       return state - 1;
//     default: 
//       return state;
//   }
//   return state;
// }

function reducer(state, action){
  switch(action.type){
    case 'GET_PHOTOS_PENDING':
      return {...state, isLoading: true};
    case 'GET_PHOTOS_FULFILLED':
      return {...state, isLoading: false, data: action.payload};
    case 'GET_PHOTOS_REJECTED':
      return {...state, isLoading: false, error: action.payload}
    default:
      return state;
  }
}

function UseReducer() {
  // const [state, dispatch] = useReducer(reducer, 0);

  const [state, dispatch] = useReducer(reducer, {
    data: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {

    dispatch({type: "GET_PHOTOS_PENDING"});

    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
      // Call API thành công, dispatch action vào reducer để set data vào state
      // action là một object, có key bắt buộc là type
      dispatch({type:       "GET_PHOTOS_FULFILLED", payload: response.data});
    }).catch((error) => {
      // Call API thất bại
      dispatch({type: "GET_PHOTOS_REJECTED", payload: error.message}) 
    });
  }, []);

  return (
    <div>
        <h1>useReducer</h1>

        {/* <p>State: {state.map((item) => {
          return <li key={item.id}>{item}</li>
        })}</p> */}
        {/* <hr />
        <button className='btn btn-success' onClick={() => dispatch({type: 'increase'})}>Increase</button>
        <hr />
        <button className='btn btn-danger' onClick={() => dispatch({type: 'decrease'})}>Decrease</button> */}
        
        {state.isLoading && <h1>Loading...</h1>}
        {state.error && <h1>{state.error}</h1>}
        <ul>
          {state.data.length > 0 &&
          state.data.map((item) => {
            return(
              <li key={item.id}>{item.title}</li>
            )
          })}
        </ul>
    </div>
  )
}

export default UseReducer