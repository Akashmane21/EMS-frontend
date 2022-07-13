import logo from './logo.svg';
import './App.css';
import Navbar from './comps/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header"> */}

      <div className="d-flex">
    <div className="intro">
      <h1>
        Employee management System
      </h1>
      <h5>
      An employee management system provides managers with insights into their workforce, and helps them to better plan and manage work hours to easily control labor costs and increase productivity.        
      </h5>
    </div>
        <div className="blocks">
          <a href="/UserRegister">

          <div className="emp block">
              <img src="https://tse1.mm.bing.net/th/id/OIP.3a-B5elyG2BjaTpvVV2hhgHaHa?pid=ImgDet&rs=1" alt="Employee image" />
              <h5>Employee Login & Registration </h5>
          </div>
          </a>
          <a href="/AdminRegister">

          <div className="admin block">
               <img src="https://static.vecteezy.com/system/resources/previews/000/379/274/non_2x/user-management-vector-icon.jpg" alt="" />
              <h5>Admin Login & Registration </h5>
          </div>
              </a>
        </div>
      </div>
      {/* </header> */}
    </div>
  );
}

export default App;
