import './App.css';
import Index from './page/Index'
import Login from './page/Login'
import Clock from './components/Clock'
import Profile from './page/Profile'
import CheckIn from './page/CheckIn'
import CheckOut from './page/CheckOut'
import {Switch ,Route} from 'react-router-dom'

function App() {
    return(
      <Switch>
        <div>
          <Route exact path="/" component={Index}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/home" component={Index}/>
          <Route exact path="/clock" component={Clock}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/home/check-in" component={CheckIn}/>
          <Route exact path="/home/check-out" component={CheckOut}/>
        </div>
      </Switch>
    )
}

export default App;
