import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas en useCounter', () => {
  test('debe retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, decrement, increment, reset } = result.current

    expect(counter).toBe(10)
    expect(decrement).toEqual(expect.any(Function))
    expect(increment).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('debe generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter } = result.current
    expect(counter).toBe(100)
  })

  test('debe incrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100))
    const { increment } = result.current

    act(() => {
      increment()
      increment(2)
    })

    expect(result.current.counter).toBe(103)
  })

  test('debe decrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100))
    const { decrement } = result.current

    act(() => {
      decrement(3)
    })

    expect(result.current.counter).toBe(97)
  })

  test('debe resetear el contador', () => {
    const { result } = renderHook(() => useCounter())
    const { reset } = result.current

    act(() => {
      reset()
    })

    expect(result.current.counter).toBe(0)
  })
})
