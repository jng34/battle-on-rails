import React from 'react'

function UserProfile({ user }) {
   
    //CRUD
    //CREATE on signup - done
    //READ - show on profile comp - done upon rendering
    //Update - random item added to user upon winning - INCOMPLETE
    //Delete user in Profile -INCOMPLETE

    // const powerData = user.powers.map((power) => power.name).map((pow) => (
    //     <p key={Math.random()}>{pow}</p>
    // ))
    // const powerDescription = user.powers.map((power) => power.description).map((pow) => (
    //     <p key={Math.random()}>{pow}</p>
    // ))
        
    // const items = user.powers.map((power) => power.item_img).map((item) => (
    //     <img key={Math.random()} alt="" src={item} style={{width: '3em'}} />
    // ))
        
    return (
        <div className="card mb-3" style={{width: "540px"}}>
            <div className="row g-0">
                <div className="col-md-8">
                    <img src={user.profile_img} alt="profile" />
                </div>
                <div className="col-md-5">
                    <h5 className="card-title">{user.name}</h5>
                    <div className="card-body align-items-center">
                        {/* {powerData} */}
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card-body align-items-center">
                        {/* {powerDescription} */}
                    </div>
                </div>
                <div className="col-md-5">
                    Items
                    {/* {items} */}
                </div>
            </div>
        </div>
    )    
}

export default UserProfile;