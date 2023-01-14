import { useState } from 'react'

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue)

  const increment = (value = 1) => {
    setCounter(prev => prev + value)
  }

  const decrement = (value = 1) => {
    setCounter(prev => prev - value)
  }

  const reset = () => {
    setCounter(0)
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}
