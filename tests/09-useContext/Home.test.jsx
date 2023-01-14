import { render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import Home from '../../src/09-useContext/pages/Home'

describe('Pruebas en <HomePage />', () => {
  const user = {
    id: 1,
    name: 'Lucas'
  }

  test('debe mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <Home />
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toBe('null')
  })

  test('debe mostrar el componente con el usuario', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <Home />
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toContain(user.name)
    expect(preTag.innerHTML).toContain(`${user.id}`)
  })
})
