import { memo } from 'react'

const Hijo = memo(({ numero, incrementar }) => {
  console.log('Hijo rendered')

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={ () => incrementar(numero) }
    >
      {numero}
    </button>
  )
})

Hijo.displayName = 'Hijo'

export default Hijo
