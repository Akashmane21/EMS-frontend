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
import Admin_Qualification from "./AdminDashboardPages/Admin_Qualification";
import Admin_Skills from "./AdminDashboardPages/Admin_Skills";
import Admin_Departments from "./AdminDashboardPages/Admin_Departments";
import Admin_Roles from "./AdminDashboardPages/Admin_Roles";
import Generate_payslip from "./AdminDashboardPages/Generate_payslip";
import Add_Emp from "./AdminDashboardPages/AddEmp";
import Emp_Details from "./AdminDashboardPages/Emp_Details";
import Emp_Departments from "./EmployeeDashboard/Emp_Departments";
import Emp_Payslips from "./EmployeeDashboard/Emp_Payslips";
import Emp_Dependents from "./EmployeeDashboard/Emp_Dependents";
import Emp_Qualification from "./EmployeeDashboard/Emp_Qualification";
import Emp_Skills from "./EmployeeDashboard/Emp_Skills";

import GlobaldataProider from "./ContextDB/Context"






export default function App() {
  return (
    <GlobaldataProider>

    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Home />} />

         <Route path="/UserLogin" element={<Login />} />
         <Route path="/UserRegister" element={<UserRegister />} />
         <Route path="/Employee_Dashboard" element={<Employee_Dashboard />} />
         <Route path="/Emp_Skills" element={<Emp_Skills />} />
         <Route path="/Emp_Qualification" element={<Emp_Qualification />} />
         <Route path="/Emp_Dependents" element={<Emp_Dependents />} />
         <Route path="/Emp_Payslips" element={<Emp_Payslips />} />
         <Route path="/Emp_Departments" element={<Emp_Departments />} />





         <Route path="/AdminRegister" element={<AdminRegister />} />
         <Route path="/AdminLogin" element={<AdminLogin />} />
         <Route path="/Admin_Dashboard" element={<Admin_Dashboard />} />
         <Route path="/Manage_emp" element={<Manage_emp />} />
         <Route path="/Manage_sal_det" element={<Manage_sal_det />} />
         <Route path="/Add_Emp" element={<Add_Emp />} />
         <Route path="/Update_emp_det/:id" element={<Update_emp_det />} />
         <Route path="/Admin_Qualification" element={<Admin_Qualification />} />
         <Route path="/Admin_Skills" element={<Admin_Skills />} />
         <Route path="/Admin_Departments" element={<Admin_Departments />} />
         <Route path="/Admin_Roles" element={<Admin_Roles />} />
         <Route path="/Generate_payslip" element={<Generate_payslip />} />
         <Route path="/Emp_Details/:id" element={<Emp_Details />} />


      </Routes>
    </BrowserRouter>
    </GlobaldataProider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security