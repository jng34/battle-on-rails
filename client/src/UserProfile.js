import React from 'react'

function UserProfile({ user }) {
    console.log(user)
  
    return (
        <div>
            {user ? `${user.name} Profile` : 'nothing'}
        </div>
    )
}

export default UserProfile