import React from 'react'

function UserProfile({ user }) {
    console.log(user)
    
    if (user) {
        return (
            <div>
                <p>{user.name}</p>
            </div>
        )
    } else return <></>
}

export default UserProfile