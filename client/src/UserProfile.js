function UserProfile({ user }) {
    const { id, name, profile_img, total_hp, total_str, powers } = user;
   
    //CRUD
    //CREATE on signup - done
    //READ - show on profile comp - done upon rendering
    //Update - random item added to user upon winning - INCOMPLETE
    //Delete user in Profile -INCOMPLETE

    const powerData = powers && powers.length > 0 ? powers.map((power) => power.name).map((pow) => (
        <p key={Math.random()}>{pow}</p>
    )) : null
    const powerDescription = powers && powers.length > 0 ? powers.map((power) => power.description).map((pow) => (
        <p key={Math.random()}>{pow}</p>
    )) : null    
    const items = powers && powers.length ? powers.map((power) => power.item_img).map((item) => (
        <img key={Math.random()} alt="item" src={item} style={{width: '5em'}} />
    )) : null

    
    function handleDeleteUser() {
        fetch(`/users/${id}`, { method: 'DELETE' })
    }
        
    return (
        <div className="card mb-3 border border-dark border-2" style={{width: "600px"}}>
            <div className="row g-0 align-items-center">
                <div className="col-md-4">
                    <img src={profile_img} className="img-fluid rounded-start" alt="profile" style={{width: "15rem", margin: "auto"}} /><br />
                    <button type="button" className="btn btn-secondary btn-sm"onClick={handleDeleteUser}>Change Profile Pic</button>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="card-text text-start">
                            <h5 className="card-title">Name: {name}</h5>
                            <b>Powers: </b> {powerData}
                            <b>Description: </b> {powerDescription}
                            <b>Items: </b> {items}
                            <br/>
                            <button type="button" className="btn btn-danger btn-md fw-bold"onClick={handleDeleteUser}>Delete Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default UserProfile;