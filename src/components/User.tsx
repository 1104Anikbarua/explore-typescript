import React, { useEffect, useState } from 'react';
import UserDetails from './UserDetails';

export interface UserModel {
    name: string,
    email: string,

}

const User = () => {
    const [users, setUsers] = useState<UserModel[]>([]);
    // const [newUser, setNewUser] = useState<UserModel[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
    }, []);

    const handleUser = (ev: UserModel): void => {
        const remaining = users.filter(user => user.name !== ev.name)
        setUsers(remaining)
    }
    return (
        <div>
            <h1>Typescript</h1>
            {
                users.map((user, index) => <UserDetails
                    key={index}
                    user={user}
                    handleUser={handleUser}
                ></UserDetails>)
            }
        </div>
    );
};

export default User;