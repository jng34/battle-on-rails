import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import Main from './Main';
import LoginForm from './LoginForm';
import BattleField from './BattleField';
import AllUsers from './AllUsers';
import SignUpForm from './SignUpForm';
import  { useState, useEffect } from 'react'
import UserProfile from './UserProfile';
import battlefield from './battlefield.png';

function App() {

  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState(null);

  function fetchUsers() {
    return fetch('/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUserData(data);
      })
  }
  useEffect(() => {
    fetchUsers()
  }, [user]);



  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, []);

  // if (!user) return <App />;
  
  return (
    <div id='bg' className="text-center" style={{ backgroundImage: `url(${battlefield})`}}>
      <Header user={user} setUser={setUser}/>
      <NavBar user={user} setUser={setUser} />
      <hr/>
        <Switch>
          <Route exact path="/">
            <Main userData={userData}/>
          </Route>
          <Route exact path="/battle">
            <BattleField user={user}/>
          </Route>
          <Route exact path="/users">
            <AllUsers userData={userData} />
          </Route>
          <Route exact path="/profile/:id">
            <UserProfile user={user}/>
          </Route>
          <Route exact path="/login">
            <LoginForm user={user} onLogin={setUser} /> 
          </Route>
          <Route exact path="/signup">
            <SignUpForm user={user} onLogin={setUser} />
          </Route>
        </Switch>
    </div>
  );

}

export default App;
