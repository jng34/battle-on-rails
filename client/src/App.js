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

function App() {
  
  return (
    <div className="text-center">
      <Header />
      <NavBar />
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
