import React from 'react'

function UserCard({name, profile_img, total_hp, total_str, powers }) { 
  
  const itemList = (powers) => {powers.map((p) => {
    <ul className="list-group list-group-flush">
    <li className="list-group-item">{p.item.name}</li>
    <li className ="list-group-item">{p.item.img_url}</li>
    <li className ="list-group-item">{p.item.description}</li>
    </ul>
  })}
  return(
    <div className="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <p class="card-text">{profile_img}{total_hp}{total_str}</p>
      </div>
        {itemList}
      {/* <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
      </div> */}
    </div>
  )

}



export default UserCard