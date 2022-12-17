import { useCounter } from '../hooks/useCounter'

const CounterWIthCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter()

  return (
    <>
      <h2>CounterWIthCustomHook</h2>
      <h3>{counter}</h3>
      <button onClick={increment} className="btn btn-primary">+1</button>
      <button onClick={reset} className="btn btn-primary">Reset</button>
      <button onClick={decrement} className="btn btn-primary">-1</button>
    </>
  )
}

export default CounterWIthCustomHook
