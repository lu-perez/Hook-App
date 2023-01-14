import { useForm } from '../hooks/useForm'

const FormWithCustomHook = () => {
  const { formState, handleChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  })

  console.log(useForm())

  const { username, email, password } = formState

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
        onChange={handleChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="mail@example.com"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <button
        className="btn btn-primary mt-2"
        onClick={onResetForm}
      >Borrar</button>
    </>
  )
}

export default FormWithCustomHook
