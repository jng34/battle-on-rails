import React from 'react'

function UserCard({ name, profile_img, total_hp, total_str, powers }) { 
  
  const powerData = powers.map((power) => power.name)
  console.log(powerData)

  return(
    // <div className="card" style={{width: "20rem"}}>
    //   <img src={profile_img} className="card-img-top" alt="profile"/>
    //   <div className="card-body">
    //      <h5 className="card-title">Name: {name}</h5>
    //      <p className="card-text">HP: {total_hp}</p>
    //      <p className="card-text">STR: {total_str}</p>
    //     <p className="card-text">powers</p>
    //   </div>
    // </div>

    <div className="col">
      <div className="card h-100">
        <img src={profile_img} className="card-img-top" alt="profile"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
            <div className="container">
              <div className="col">
                 <p className="card-text text-center">HP: {total_hp}</p>
                 <p className="card-text text-center">STR: {total_str}</p>
              </div>
              <div className="col">Weapons and powers here</div>
            </div>
        </div>
        <div className="card-footer">
            <small className="text-muted">
              <button className='btn btn-dark'>Fight Me!</button>
            </small>
        </div>
      </div>
    </div>
  )

}



export default UserCard