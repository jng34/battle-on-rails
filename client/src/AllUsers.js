import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';


function AllUsers() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch("/users")
        .then(r => r.json())
        .then(userData => setUserList(userData))
    }, []);

   const users = userList?.map((user) => (
        <UserCard key={user.id} name={user.name} profile_img={user.profile_img} total_hp={user.total_hp} total_str={user.total_str} powers={user.powers}/>
    ))
    
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 ms-5 me-5">
            {users}
        </div>
    )
}

export default AllUsers;