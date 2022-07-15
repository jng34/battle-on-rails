import React from 'react';
import cube from './cubeblock.png';


function Main() {

    // const [userData, setUserData] = useState([]);
  

    // useEffect(() => {
    //   fetchUsers()
    // }, []);
  
    // function fetchUsers() {
    //   return fetch('/users')
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);
  
    //       setUserData(data);
    //     })
    // }
    return (
        <div >
            <div className='container'>
                <div className='row'>
                    <div className='col align-self-start'>
                        <h1>Once upon a time in Rails...</h1>
                        <h2>a monster dropped a HUGE code block on your head</h2>
                    </div>
                    <div className='col align-self-center'>
                        <div></div>
                        <img src="https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg" alt="cube" style={{width: "15rem", margin: "auto"}} />
                        <br />
                        <img src={cube} alt="cube" style={{width: "15rem", margin: "auto"}} />
                    </div>
                    <div className='col'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;