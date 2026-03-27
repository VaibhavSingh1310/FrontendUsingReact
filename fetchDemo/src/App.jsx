import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log(res.data);
        setUsers(res.data); // store data
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>Fetch API</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;