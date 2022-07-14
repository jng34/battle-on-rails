import React from 'react'

function UserProfile({ user }) {
        
    if (user) {
        return (
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={user.profile_img} class="img-fluid rounded-start" alt="user" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{user.name}</h5>
                            <p class="card-text">{user.powers}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else return <></>
}

export default UserProfile