import { useState } from 'react'
import Message from './Message'

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'fernando@gmail.com'
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return (
    <>
      <h2>Formulario Simple</h2>
      <hr/>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="mail@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {
        (username === 'strider2') && <Message />
      }
    </>
  )
}

export default SimpleForm
