import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Routes,} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

import NewComponent from './components/NewComponent';
import TestComponent from './components/TestComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
 
function App() {
  return (
    <div>
      <Router>
        
            <HeaderComponent/>
              <div className="container">
                <Routes>
                  <Route path='/' Component={ListEmployeeComponent}></Route>
                  <Route path='/employees' Component={ListEmployeeComponent}></Route>
                  <Route path='/add-employees' Component={CreateEmployeeComponent}></Route>
                  {/* <Route path='/test' Component={TestComponent}></Route> */}
                  <Route path='/update-employees/:id' Component={UpdateEmployeeComponent}></Route>

                </Routes>
              </div>
            <FooterComponent/>
     
      </Router>
    </div>
  );
}

export default App;
