import React from 'react';
import './App.css';
import Navigation from './Components/Navigation'
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'
import Home from './Components/Pages/Home'
import MainPage from './Components/Pages/MainPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {DDCO, DSA, SDS, WT, AFLL} from './Components/Pages/Classrooms'

class App extends React.Component {

  state = {
    isLoggedIn: false,
    isRegistered: false
  }

  handleRegister = () => {
    this.setState({isRegistered: true});
  }

  onLogout = () => {
    this.setState({isLoggedIn: false});
  }

  render() {

    return (
      <Router>
        <Navigation isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin}
        onLogout={this.onLogout} onRegister={this.onRegister} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" render={({history}) => (<Login handleLogin={() => {
            history.push('/Mainpage');
            this.setState({isLoggedIn: true});
          } } />)} />
          <Route path="/Register" render={(props) => (<Register handleRegister={this.handleRegister} />)} />
          <Route path="/Mainpage" component={MainPage} />
          <Route path="/DDCO" component={DDCO}/>
          <Route path="/DSA" component={DSA} />
          <Route path="/SDS" component={SDS} />
          <Route path="/WT" component={WT} />
          <Route path="/AFLL" component={AFLL} />
        </Switch>
      </Router>
    );
  }
}

export default App;
