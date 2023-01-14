import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Login = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h2>LoginPage</h2>
      <hr />

      <pre aria-label="pre">
        { JSON.stringify(user, null, 3) }
      </pre>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setUser({ id: 123, name: 'Juan', email: 'juan@example.com' })}
      >
        Establecer usuario
      </button>
    </>
  )
}

export default Login
