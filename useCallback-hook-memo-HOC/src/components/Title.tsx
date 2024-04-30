import { memo } from 'react'

const Title = () => {
  console.log('Rendering Title')
  return <h2>memo HOC and useCallback Hook</h2>
}

export default memo(Title)
// just wrap with memo HOC

