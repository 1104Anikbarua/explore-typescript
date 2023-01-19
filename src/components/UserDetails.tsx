import React, { FC } from 'react';
import { UserModel } from './User';
// import User from './User';

interface Props {
    user: UserModel
    handleUser: (user: UserModel) => void
}

const UserDetails: FC<Props> = ({ user, handleUser }) => {
    // console.log(user)
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <button onClick={() => handleUser(user)}>Remove</button>
        </div>
    );
};

export default UserDetails;