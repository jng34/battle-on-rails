import React from 'react'

function UserCard({name, profile_img, total_hp, total_str, powers }) { 
  
console.log(powers)
  return(
    <div className="card" style={{width: "18rem;"}}>
      <img src={profile_img} className="card-img-top" alt="profile"/>
      <div className="card-body">
         <h5 className="card-title">Name: {name}</h5>
         <p className="card-text">HP: {total_hp}</p>
         <p className="card-text">STR: {total_str}</p>
        <p className="card-text">powers</p>
      </div>
      <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  )

}



export default UserCard