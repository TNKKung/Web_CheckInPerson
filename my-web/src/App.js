import './App.css';
import Index from './page/Index'
import Login from './page/Login'
import Clock from './components/Clock'
import Profile from './page/Profile'
import CheckIn from './page/CheckIn'
import CheckOut from './page/CheckOut'
import ListTime from './page/ListTime'
import Report from './page/Report'
import {Switch ,Route} from 'react-router-dom'

function App() {
    return(
      <Switch>
        <div>
          <Route exact path="/" component={Index}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/clock" component={Clock}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/checkIn" component={CheckIn}/>
          <Route exact path="/checkOut" component={CheckOut}/>
          <Route exact path="/listTime" component={ListTime}/>
          <Route exact path="/Report" component={Report}/>
        </div>
      </Switch>
    )
}

export default App;
