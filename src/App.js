import './App.css';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import  { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
             <Switch>
                <Route path="/home">
                  <HomePage/>
                </Route>
                <Route path="/login">
                  <LoginPage/>
                </Route>
                <Route path="">
                  <SignUpPage/>
                </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
