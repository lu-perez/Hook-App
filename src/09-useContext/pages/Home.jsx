import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Home = () => {
  const { user } = useContext(UserContext)
  // console.log(user)

  return (
    <h2>Home <small>{user?.name}</small></h2>
  )
}

export default Home
