import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import Main from './Main';
import LoginForm from './LoginForm';
import BattleField from './BattleField';
import AllUsers from './AllUsers';
import SignUpForm from './SignUpForm';
import UserProfile from './UserProfile';
import battlefield from './battlefield.png';

function App() {
  const [user, setUser] = useState(null);

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
            <Main />
          </Route>
          <Route exact path="/battle">
            <BattleField />
          </Route>
          <Route exact path="/users">
            <AllUsers />
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
