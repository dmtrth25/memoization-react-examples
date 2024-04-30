import { useState, useMemo } from 'react'

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(prevCounterOne => prevCounterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(prevCounterTwo => prevCounterTwo + 1)
  }

  // const isEven = () => {
  // 	return counterOne % 2 === 0
  // }
  // example without useMemo and some delay

  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++ // iterates for a long time (second or two delay) (UI slow to update)
    // because we rendering odd or even text
    // react should to check is number odd or even
    // Counter two still UI updates
    // why ? every time when state updates -> component re-render
    // when component re-renders isEven function call again
    return counterOne % 2 === 0
  }, [counterOne])

  // useMemo return cached value which we passed to isEven variable
  // we can remove call () because it's now stores a value
  // react now used the chached value of isEven function where the count 1 is odd or even
  // used cached value from a previous value

  return (
    <>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        {/* <span>{isEven() ? 'Even' : 'Odd'}</span> */}{' '}
        {/**example without cache value with useMemo */}
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </>
  )
}

export default Counter

