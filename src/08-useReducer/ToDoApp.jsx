import { useEffect, useReducer } from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import { todoReducer } from './todoReducer'

const ToDoApp = () => {
  const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: 'Recolectar la piedra del alma',
    //   done: false
    // },
    // {
    //   id: new Date().getTime() * 3,
    //   description: 'Recolectar la piedra del tiempo',
    //   done: false
    // }
  ]

  const init = () => {
    return JSON.parse(sessionStorage.getItem('toDos')) || []
  }

  const [toDos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    sessionStorage.setItem('toDos', JSON.stringify(toDos))
  }, [toDos])

  const handleNewToDo = (toDo) => {
    // console.log({ toDo })
    const action = {
      type: '[TODO] Add ToDo',
      payload: toDo
    }
    dispatch(action)
  }

  const handleDeleteToDo = (id) => {
    dispatch({
      type: '[TODO] Delete ToDo',
      payload: id
    })
  }

  const handleToggleToDo = (id) => {
    dispatch({
      type: '[TODO] Toggle ToDo',
      payload: id
    })
  }

  return (
    <>
      <h2>TodoApp</h2>
      <hr />

      <div className="row">
        <div className="col-7">
          <ToDoList
            toDos={toDos}
            onDeleteToDo={handleDeleteToDo}
            onToggleToDo={handleToggleToDo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr />
          <ToDoForm onNewToDo={handleNewToDo}/>
        </div>
      </div>
    </>
  )
}

export default ToDoApp
