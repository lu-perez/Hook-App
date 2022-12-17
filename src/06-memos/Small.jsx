import { memo } from 'react'

const Small = memo(({ value }) => {
  console.log('render Small component')

  return (
    <small>{value}</small>
  )
})

Small.displayName = 'Small' // eslint

export default Small
