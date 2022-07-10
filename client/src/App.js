import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import Main from './Main';
import UserForm from './UserForm';
import BattleField from './BattleField';
import About from './About';

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
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/user">
            <UserForm />
          </Route>
        </Switch>
    </div>
  );

}

export default App;
