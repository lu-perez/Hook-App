import { fireEvent, render, screen } from '@testing-library/react'
import ToDoItem from '../../src/08-useReducer/ToDoItem'

describe('Pruebas en <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false
  }

  const onDeleteToDoMock = jest.fn()
  const onToggleToDoMock = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('debe mostrar el Todo Pendiente de completar', () => {
    render(
      <ToDoItem
        toDo={todo}
        onToggleToDo={onToggleToDoMock}
        onDeleteToDo={onDeleteToDoMock}
      />
    )

    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toContain('align-self-center')
    expect(spanElement.className).not.toContain('text-decoration-line-through')
  })

  test('debe mostrar el Todo completado', () => {
    todo.done = true

    render(
      <ToDoItem
        toDo={todo}
        onToggleToDo={onToggleToDoMock}
        onDeleteToDo={onDeleteToDoMock}
      />
    )

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toContain('text-decoration-line-through')
  })

  test('span debe llamar el ToggleToDo cuando se hace click', () => {
    render(
      <ToDoItem
        toDo={todo}
        onToggleToDo={onToggleToDoMock}
        onDeleteToDo={onDeleteToDoMock}
      />
    )

    const spanElement = screen.getByLabelText('span')
    fireEvent.click(spanElement)
    expect(onToggleToDoMock).toHaveBeenCalledWith(todo.id)
  })

  test('button debe llamar al deleteToDo', () => {
    render(
      <ToDoItem
        toDo={todo}
        onToggleToDo={onToggleToDoMock}
        onDeleteToDo={onDeleteToDoMock}
      />
    )

    const deleteButton = screen.getByRole('button')
    fireEvent.click(deleteButton)
    expect(onDeleteToDoMock).toHaveBeenCalledWith(todo.id)
  })
})
