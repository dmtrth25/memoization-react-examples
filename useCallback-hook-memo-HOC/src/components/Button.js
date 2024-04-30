import React, { memo } from 'react'
// use destructuring for memo

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default memo(Button)
// just wrap with memo HOC
