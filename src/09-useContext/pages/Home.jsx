import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Home = () => {
  const { user } = useContext(UserContext)
  // console.log(user)

  return (
    <>
      <h2>HomePage <small>{user?.name}</small></h2>
      <hr />

      <pre aria-label="pre">
        { JSON.stringify(user, null, 3) }
      </pre>
    </>
  )
}

export default Home
