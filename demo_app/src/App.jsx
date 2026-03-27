import {UserCard} from './components/UserCard'
import {Wrapper} from './components/Wrapper'
export default function App() {
  const users = [
    {
      name: "Rohit Sharma",
      role: "Batsman",
      country: "India",
    },
    {
      name: "Japreet Boomrah",
      role: "Bowler",
      country: "India",
    }
  ]

  return (
    <>
    <h1>Users Dashboard</h1>
    <Wrapper tittle="User List">
      {
        users.map((use,index)=>(<UserCard key = {index} user={use} />))
      }
      
    </Wrapper>

    </>
  )
}

