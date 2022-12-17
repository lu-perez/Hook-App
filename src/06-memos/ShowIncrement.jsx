import { memo } from 'react'

const ShowIncrement = memo(({ increment }) => {
  console.log('showIncrement component render')

  return (
    <button
      className="btn btn-primary"
      onClick={() => increment(5)}
    >Incrementar</button>
  )
})

ShowIncrement.displayName = 'ShowIncrement'

export default ShowIncrement
