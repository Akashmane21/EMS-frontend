import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="blocks">
          <a href="/UserRegister">

          <div className="emp block">
              <img src="https://tse1.mm.bing.net/th/id/OIP.3a-B5elyG2BjaTpvVV2hhgHaHa?pid=ImgDet&rs=1" alt="Employee image" />
              <h5>Employee </h5>
          </div>
          </a>
          <a href="/AdminRegister">

          <div className="admin block">
               <img src="https://static.vecteezy.com/system/resources/previews/000/379/274/non_2x/user-management-vector-icon.jpg" alt="" />
              <h5>Admin </h5>
          </div>
              </a>
        </div>
      </header>
    </div>
  );
}

export default App;
