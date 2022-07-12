import React from 'react';
import BattleField from 'BattleField';


function Main() {

    const [userData, setUserData] = useState([]);
  

    useEffect(() => {
      fetchUsers()
    }, []);
  
    function fetchUsers() {
      return fetch('/users')
        .then(res => res.json())
        .then(data => {
          console.log(data);
  
          setUserData(data);
        })
    }
    return (
        <div >
            Main page
        </div>
    )
}

export default Main;