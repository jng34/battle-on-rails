import React from 'react'

function UserProfile({ user }) {
   
    //CRUD
    //CREATE on signup - done
    //READ - show on profile comp - done upon rendering
    //Update - random item added to user upon winning - INCOMPLETE
    //Delete user in Profile -INCOMPLETE

        
    return (
            <div className="card mb-3" style={{width: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={user?.profile_img} alt="profile" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{user?.name}</h5>
                            <p className="card-text">{user?.powers}</p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )    
}

export default UserProfile;