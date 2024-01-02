import React from 'react'

// Import css
import './style.css';
import Child from './Child';

// Import css module
import style from './style.module.css';

function Style() {
  return (
    <div>
        <h1>Style</h1>
        {/* Inline style  */}
        <h1 style={{
            backgroundColor: "red", color: "white",
            }}>Hello Reactjs</h1>

         {/* CSS  */}
         <h1 className='heading'>Hello BC42</h1>
         <Child/>

         {/* CSS module */}
         <h1 className={style.heading}>Hello CSS module</h1>
    </div>

    
  )
}

export default Style