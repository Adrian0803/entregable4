import React from 'react';

const UsersList = ({ usersList, selectUser, deleteUser }) => {
    return (
        <ul>
            {
                usersList.map(users => (
                    <li key={users.id}>
                        <h3>Name: {users.first_name} {users.last_name} </h3>
                        <h4>Correo: {users.email} </h4>
                        <h4>{users.birthday}</h4>
                        <button onClick={() => selectUser(users)}>select</button>
                        <button onClick={() => deleteUser(users.id)}>delete</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;