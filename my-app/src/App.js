
import './App.css';
import Login from './page/Login'
import Clock from './page/Clock'
import Home from './page/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/login" component={Login}/>
        <Route path="/clock" component={Clock}/>
        <Route path="/home" component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
