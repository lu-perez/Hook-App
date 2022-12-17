import { useCounter, useFetch } from '../hooks'
import LoadingQuote from './LoadingQuote'
import Quote from './Quote'

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)
  const { data, isLoading } = useFetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)

  return (
    <>
      <h2>BreakingBad Quotes</h2>
      <hr/>
      {
        isLoading
          ? (
            <LoadingQuote />
            )
          : (
            <Quote {...data}/>
            )
      }
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next To Do
      </button>
    </>
  )
}

export default MultipleCustomHooks
