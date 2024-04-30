import { FC, memo } from 'react'

type ICount = {
  text: string
  count: number
}

const Count: FC<ICount> = ({ text, count }) => {
  console.log(`Rendering ${text}`)
  return (
    <div>
      {text} - {count}
    </div>
  )
}

export default memo(Count)
// just wrap with memo HOC

