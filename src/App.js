import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import LoginComponent from './components/LoginComponent/LoginComponent';
import SignUpComponent from './components/SignUpComponent/SignUpComponent';
function App() {
  return (
    <Router>
      <div className="App">
        <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
          <div className='container'>
            <Link className='navbar-brand' to='/login'>
              Nagaraj :) 
            </Link>
            <div className='collapse navbar-collapse' id='navbarTooglerDemo02'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link a' to={'/login'}>Login</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link a' to={'/signup'}>SignUp</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
       <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Routes>
            <Route exact path='/' element={<LoginComponent/>}/>
            <Route path='/login' element={<LoginComponent/>}/>
            <Route path='/signup' element={<SignUpComponent/>}/>
          </Routes>
        </div>
       </div>
      </div>
    </Router>
  );
}

export default App;
