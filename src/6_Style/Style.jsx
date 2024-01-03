import React from 'react'

// Import css
import './style.css';
import Child from './Child';

// Import css module
import style from './style.module.css';
import childStyle from './child.module.css'

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

         {/* Nhiều classes trong một thẻ */}
         <h1 className={`${childStyle.heading} ${childStyle.content}`}>Hello CSS many classes</h1>
    </div>

    
  )
}

export default Style