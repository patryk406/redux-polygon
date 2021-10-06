import {useState} from 'react';

import UsersList from '../components/UsersList'

const Users = () => {

    const [users,setUsers]=useState([]);
    const fetchData = () => fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>res.json())
    .then(data => setUsers(data.slice(0,3)))

    return (
        <div className='container'>
        <h2>Users</h2>
        <button onClick={fetchData}>Fetch Users</button>
        <UsersList users={users}/>
        </div>
    )
}

export default Users
