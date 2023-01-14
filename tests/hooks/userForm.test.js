import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Lucas',
    email: 'lucas@example.com'
  }

  test('debe regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      handleChange: expect.any(Function),
      onResetForm: expect.any(Function)
    })
  })

  test('debe cambiar el nombre del formulario', () => {
    const newValue = 'Juan'

    const { result } = renderHook(() => useForm(initialForm))
    const { handleChange } = result.current

    act(() => {
      handleChange({ target: { name: 'name', value: newValue } })
    })

    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)
  })

  test('debe resetear el formulario', () => {
    const newValue = 'Juan'

    const { result } = renderHook(() => useForm(initialForm))
    const { handleChange, onResetForm } = result.current

    act(() => {
      handleChange({ target: { name: 'name', value: newValue } })
      onResetForm()
    })

    expect(result.current.name).toBe(initialForm.name)
    expect(result.current.formState.name).toBe(initialForm.name)
  })
})
