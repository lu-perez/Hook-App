import { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (iteration = 100) => {
  for (let i = 0; i < iteration; i++) {
    console.log('Go...')
  }
  return `${iteration} done`
}

const MemoHook = () => {
  const { counter, increment } = useCounter(10)
  const [show, setShow] = useState(true)
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h2>Counter: {counter}</h2>
      <hr/>
      <h4>{memorizedValue}</h4>
      <button
        className="btn btn-primary"
        onClick={() => increment()}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide: {JSON.stringify(show)}
      </button>
    </>
  )
}

export default MemoHook
