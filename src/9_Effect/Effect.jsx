import React, {useState, useEffect} from 'react'
import Child from './Child';
import User from './User';

// useEffect(setup, deps)

function Effect() {
    const [count, setCount] = useState(0);
    
    // #1: useEffect với tham số thứ 2 là một array rỗng
    // - Chạy hàm setup 1 lần duy nhất sau lần render đầu tiên 
    // useEffect(() => {
    //     console.log("effect run")
    // }, []);

    // #2: useEffect với tham số thứ 2 là một array có các giá trị
    // - Chạy hàm setup ở lần render đầu tiên
    // - Ở những lần render tiếp theo, hàm setup sẽ được chạy nếu các giá trị bên trong array ở tham số thứ 2 bị thay đổi
    useEffect(() => {
        console.log("effect run")
    }, [count]);

    console.log('render run')
  return (
    <div>
        <h1>Effect</h1>

        <p>Count: {count}</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Click</button>

        {count <= 10 && <Child count={count}/>}
        <hr />
        <User/>
    </div>
  )
}

export default Effect