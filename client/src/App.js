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
  const [user, setUser] = useState({});

    useEffect(() => {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);

    // if (!user) return <LoginForm onLogin={setUser} />;

  return (
    <div id='bg' className="text-center" style={{ backgroundImage: `url(${battlefield})`}}>
      <Header user={user} setUser={setUser}/>
      {user.name ? <NavBar /> : <div></div>} 
      <hr/>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/battle">
            <BattleField user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/users">
            <AllUsers />
          </Route>
          <Route exact path="/profile">
            <UserProfile user={user}/>
          </Route>
          <Route exact path="/login">
            <LoginForm user={user} onLogin={setUser} /> 
          </Route>
          <Route exact path="/signup">
            <SignUpForm onSignUp={setUser} />
          </Route>
        </Switch>
    </div>
  );

}

export default App;
