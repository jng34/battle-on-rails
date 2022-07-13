import React from 'react';
import UserCard from './UserCard';

function AllUsers({userData}) {
   const users = userData.map((user) => 
       (<UserCard key={user.id} name={user.name} profile_img={user.profile_img} total_hp={user.total_hp} total_str={user.total_str} powers={user.powers}/>))
    return (
        <div className='text-center'>
            AllUsers
            {users}
        </div>
    )
}

export default AllUsers;