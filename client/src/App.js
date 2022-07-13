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

function App() {

  const [userData, setUserData] = useState([]);

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
  }, []);
  
  return (
    <div className="text-center">
      <Header />
      <NavBar />
      <hr/>
        <Switch>
          <Route exact path="/">
            <Main userData={userData}/>
          </Route>
          <Route exact path="/battle">
            <BattleField userData={userData}/>
          </Route>
          <Route exact path="/users">
            <AllUsers userData={userData} />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/signup">
            <SignUpForm />
          </Route>
        </Switch>
    </div>
  );

}

export default App;
