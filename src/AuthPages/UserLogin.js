import React from 'react'
import Navbar from '../comps/Navbar'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

  function login(){
    var Username = document.getElementById("Username").value;
    var Password = document.getElementById("Password").value;
   
   
    axios
    .get("https://localhost:44362/api/Auth/")
    .then((response) => {
      const Data = response.data;
      const user = Data.find(e => e.username==Username)
      if(user!=undefined){
        if(user.password==Password){
          toast("Welcome");
          localStorage.setItem("Auth" , "true")
          window.location.replace('/')
          localStorage.setItem("Userinfo" , JSON.stringify(user))

        }else{
          toast("Wrong Password")
        }
      }
      else{
        toast("Invalid Credentials");
      }
    })
    .then((err) => {
      console.log(err);
    });
}
  return (
    <>
   
<div className='m-4'>
 
<center>
    <div className="registertitle">

<img src="https://tse1.mm.bing.net/th/id/OIP.3a-B5elyG2BjaTpvVV2hhgHaHa?pid=ImgDet&rs=1" alt="" />
<h1>Employee Registeration</h1>
    </div>

</center>

<hr />
<div class="row">
<div class="col-md-4    ">
    {/* <form > */}
        <div class="form-group">
            <label for="Username" class="control-label">Username</label>
            <input id="Username" class="form-control" />
        </div>
        <div class="form-group">
            <label for="Password" class="control-label">Password</label>
            <input id="Password" type="password" class="form-control" />
        </div>
       
        <br />
        <div class="form-group">
            <a class="btn btn-primary" onClick={login} > Login </a>
        </div>
        <br />
            <br />
            <h5>New User ? <a href="/UserRegister">Register</a></h5>
    {/* </form> */}
</div>
</div>




</div>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

</>
  )
}
