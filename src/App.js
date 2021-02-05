import {Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './nav/Nav';
import Setting from './setting/Setting';
import Manage from './manage/Manage';
import Search from './search/Search';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header2">
        <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="*/search" component={Search} />
            <Route path="*/setting" component={Setting} />
            <Route path="*/manage" component={Manage} />
            <Route path="*" component={Search} />
          </Switch>
            
      </header>
    </div>
  );
}

export default App;
