import './App.css';
import Home from './page/Home'
import Login from './page/Login'
import {BrowserRouter,Route} from 'react-router-dom'
function App() {

  

  return (
      <BrowserRouter>
        <div>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
