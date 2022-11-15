import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import UsersList from './assets/components/UsersList';
import UsersForm from './assets/components/UsersForm';

function App() {

  const [userSelected, setUserSelected] = useState(null);

  const [usersList, setUserList] = useState([]);
  
  useEffect(() => {

    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUserList(res.data));

  }, [])

  const getUsers = () => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUserList(res.data));

  }

  const selectUser = (users) => {
    setUserSelected(users)
  }

  const deselecUser = () => setUserSelected(null)

  const deleteUser = (id) => {
    const filterdUser = usersList.filter(
      users => users.id !== id
    )
    setUserList(filterdUser)
  }
  

  console.log(usersList);
  
  
  return (
    <div className="App">
      
      <UsersList 
        usersList={usersList} 
        selectUser={selectUser}
        deleteUser={deleteUser}
        />
      <UsersForm 
        getUsers={getUsers}
        userSelected={userSelected}
        deselecUser={deselecUser}
      />
      
    </div>
  )
}

export default App
