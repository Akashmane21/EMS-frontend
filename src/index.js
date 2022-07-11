import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './App'
import './index.css'

import Login from "./AuthPages/UserLogin";
import UserRegister from "./AuthPages/UserRegister";
import AdminRegister from "./AuthPages/AdminRegister";
import AdminLogin from "./AuthPages/AdminLogin";
import Admin_Dashboard from "./AdminDashboardPages/Admin_Dashboard";
import Employee_Dashboard from "./EmployeeDashboard/Employee_Dashboard";
import Manage_emp from "./AdminDashboardPages/Manage_emp";
import Manage_sal_det from "./AdminDashboardPages/Manage_sal_det";
import Update_emp_det from "./AdminDashboardPages/Update_emp_det";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Home />} />

         <Route path="/UserLogin" element={<Login />} />
         <Route path="/UserRegister" element={<UserRegister />} />
         <Route path="/Employee_Dashboard" element={<Employee_Dashboard />} />




         <Route path="/AdminRegister" element={<AdminRegister />} />
         <Route path="/AdminLogin" element={<AdminLogin />} />
         <Route path="/Admin_Dashboard" element={<Admin_Dashboard />} />
         <Route path="/Manage_emp" element={<Manage_emp />} />
         <Route path="/Manage_sal_det" element={<Manage_sal_det />} />
         <Route path="/Update_emp_det" element={<Update_emp_det />} />



      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security