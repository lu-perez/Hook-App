import { useEffect, useState } from 'react'

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const onMouseMove = ({ x, y }) => {
    setCoords({ x, y })
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div>Message</div>
      {JSON.stringify(coords)}
    </>
  )
}

export default Message
