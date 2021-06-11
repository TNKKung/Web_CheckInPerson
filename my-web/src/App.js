import './App.css';
import Index from './page/Index'
import Home from './page/Home'
import Login from './page/Login'
import Clock from './components/Clock'
import {Switch ,Route} from 'react-router-dom'

function App() {
    return(
      <Switch>
        <div>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/clock" component={Clock}></Route>
        </div>
      </Switch>
    )
}

export default App;
