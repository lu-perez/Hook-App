import { useForm } from '../hooks/useForm'

const ToDoForm = ({ onNewToDo }) => {
  const { formState, handleChange } = useForm({
    description: ''
  })

  const onSubmitForm = (evt) => {
    evt.preventDefault()
    if (formState.description.length < 1) {
      return
    }
    const newToDo = {
      id: new Date().getTime(),
      done: false,
      description: formState.description
    }
    onNewToDo(newToDo)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={formState.description}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  )
}

export default ToDoForm
