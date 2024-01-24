import React, {useState} from 'react'
import Child from './Child'

// Memo = memorization
function Memo() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const [numbers, setNumbers] = useState([])
    const handleAddNumber = () => {
        const number = Math.floor(Math.random() * 100);
        setNumbers([...numbers, number]);
    }

  return (
    <div>
        <h1>Memo</h1>
        <p>Count: {count}</p>
        <button className='btn btn-dark' onClick={() => setCount(count + 1)}>Click</button>

        <p>Message: {message}</p>
        <button className='btn btn-primary' onClick={() => setMessage("Hello yo Lemon !")}>Set message</button>

        <p>Numbers: {numbers.join(", ")}</p>
        <button className='btn btn-success' onClick={handleAddNumber}>Add number</button>
        <hr />

        <Child message={message} numbers={numbers}/>
    </div>
  )
}

export default Memo