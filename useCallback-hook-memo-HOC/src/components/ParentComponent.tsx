import { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

const ParentComponent = () => {
  // Define our states for example
  const [age, setAge] = useState(30)
  const [salary, setSalary] = useState(50000)

  // Increment age handler
  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  // Increment salary handler
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])

  return (
    <div>
      <Title />
      {/** Purpose to avoid re-renders for both reusable components 
			<Count /> and <Button />
			*/}
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>

      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

// In my example also used React.memo that will prevent a functional component from being re-render if it’s props or state don’t change

// For both cases we returned cached functions which then pass as a props to the child components

export default ParentComponent

