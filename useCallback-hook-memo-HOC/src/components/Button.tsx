import { FC, memo, ReactNode } from 'react'
// use destructuring for memo

interface IButton {
  handleClick: () => void
  children: ReactNode
}

const Button: FC<IButton> = ({ handleClick, children }) => {
  console.log('Rendering button - ', children)
  return <button onClick={handleClick}>{children}</button>
}

export default memo(Button)
// just wrap with memo HOC

