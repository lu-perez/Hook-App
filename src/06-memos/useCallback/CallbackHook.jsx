import { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {
  const [counter, setCounter] = useState(0)

  const onIncrement = useCallback((n) => {
    setCounter(prev => prev + n)
  }, [])

  return (
    <>
      <h2>useCallback Hook: {counter}</h2>
      <hr/>
      <ShowIncrement increment={onIncrement}/>
    </>
  )
}

export default CallbackHook
