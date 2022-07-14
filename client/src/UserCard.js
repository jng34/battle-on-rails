import React from 'react'

function UserCard({ name, profile_img, total_hp, total_str, powers }) { 
  
  const powerData = powers.map((power) => power.name).map((pow) => (
    <p>{pow}<br /></p>
  ))
  const itemData = powers.map((power) => power.item_img).map((item) => (
    <img src={item} key={item} style={{width: '3em'}}/>
  ))
  console.log(itemData)

  return(

    <div className="col">
      <div className="card h-100 bg-teal">
        <img src={profile_img} className="card-img-top" alt="profile"/>
        <div className="card-body">
          <h3 className="card-title">{name}</h3><br/>
            <div className="container row justify-content-center">
              <div className="col">
                <p className="card-text text-center fw-semibold">STATS</p>
                 <p className="card-text text-center text-primary fw-semibold">HP: {total_hp}</p>
                 <p className="card-text text-center text-success fw-semibold">STR: {total_str}</p>
              </div>
              <div className="col">
                <p className="card-text text-center fw-semibold">POWERS</p>
                {powerData}
              </div>
              <div className="col">
                <p className="card-text text-center fw-semibold">ITEMS</p>
                {itemData}
              </div>
            </div>
        </div>
        {/* <div className="card-footer">
            <small className="text-muted">
              <button className='btn btn-danger'>Fight Me!</button>
            </small>
        </div> */}
      </div>
    </div>
  )

}



export default UserCard