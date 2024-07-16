import './App.css';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/AuthContext';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="app-container">
      <UserProvider>
        <Header />
        <Switch>
          <Route path="/signin" component={SignIn} />
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;