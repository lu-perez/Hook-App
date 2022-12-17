import { useLayoutEffect, useRef, useState } from 'react'

const Quote = ({ title, id }) => {
  const h3Ref = useRef()
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { height, width } = h3Ref.current.getBoundingClientRect()
    setBoxSize({ width, height })
  }, [title])

  return (
    <div>
      <blockquote
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
        <h3 ref={h3Ref}>{title}</h3>
        <p className="mb-1">Hola mundo</p>
        <footer className="blockquote-footer">{id}</footer>
      </blockquote>
      <code>
        {JSON.stringify(boxSize)}
      </code>
    </div>
  )
}

export default Quote
