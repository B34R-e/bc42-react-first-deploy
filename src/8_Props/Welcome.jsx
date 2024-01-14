import React from 'react'

function Welcome({name = "unknown", email = "unknown"}) {
    // console.log(props)
  return (
    <div>
        <h3>Hello {name} - {email}</h3>
    </div>
  )
}

export default Welcome