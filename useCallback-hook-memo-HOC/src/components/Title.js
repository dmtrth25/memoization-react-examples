import React from 'react'

function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      React.memo and useCallback Hook
    </h2>
  )
}

export default React.memo(Title)
// just wrap with memo HOC
