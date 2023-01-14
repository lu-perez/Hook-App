import { todoReducer } from '../../src/08-useReducer/todoReducer'

describe('Pruebas en todoReducer', () => {
  const initialState = [{
    id: 1,
    description: 'Demo Todo',
    done: false
  }]

  test('debe regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('debe agregar un todo', () => {
    const action = {
      type: '[TODO] Add ToDo',
      payload: {
        id: 2,
        description: 'Nuevo todo #2',
        done: false
      }
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })

  test('debe eliminar un todo', () => {
    const action = {
      type: '[TODO] Delete ToDo',
      payload: 1
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(0)
  })

  test('debe realizar el Toggle del todo', () => {
    const action = {
      type: '[TODO] Toggle ToDo',
      payload: 1
    }

    const newState = todoReducer(initialState, action)
    expect(newState[0].done).toBe(true)
    const newState2 = todoReducer(newState, action)
    expect(newState2[0].done).toBe(false)
  })
})
