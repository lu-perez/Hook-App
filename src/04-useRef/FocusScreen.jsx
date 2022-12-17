import { useRef } from 'react'

const FocusScreen = () => {
  const inputRef = useRef()

  const onClick = () => {
    inputRef.current.select()
  }

  return (
    <>
      <h2>FocusScreen</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Name"
        className="form-control"
      ></input>
      <button
        className="btn btn-primary mt-2"
        onClick={onClick}
      >
        Set focus
      </button>
    </>
  )
}

export default FocusScreen
