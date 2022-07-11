import React from 'react'
import Navbar from '../comps/Navbar'
import axios from "axios";

export default function UserRegister() {

    function AddUser(){
        var Username = document.getElementById("Username").value;
        var Password = document.getElementById("Password").value;
        var Phone = document.getElementById("Phone").value;
        var Type = "User";
        var Email = document.getElementById("Email").value;
        const data ={Username , Password , Phone , Email , Type}
        console.log(data);
        axios
        .post("https://localhost:44362/api/Auth/", data)
        .then((response) => {
          alert(response.data);
          window.location.replace('/Login')
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
    <div class="col-md-4 ">
        {/* <form > */}
        <div class="form-group">
                <label for="Username" class="control-label">Username</label>
                <input id="Username" class="form-control" />
            </div>
        
            <div class="form-group ">
                <label for="Email" class="control-label">Email</label>
                <input id="Email" type="email" class="form-control" />
            </div>
            <div class="form-group">
                <label for="Email" class="control-label">Confirm Email</label>
                <input id="Email" type="email" class="form-control" />
            </div>
            <div class="form-group">
                <label for="Password" class="control-label">Password</label>
                <input id="Password" type="password" class="form-control" />
            </div>
            <div class="form-group">
                <label for="Password" class="control-label"> Confirm Password</label>
                <input id="Password" type="password" class="form-control" />
            </div>
           
            <br />
            <div class="form-group">
                <a class="btn btn-primary" onClick={AddUser} > Register Now </a>
            </div>
            <br />
            <br />
            <h5>Already existing user ? <a href="/UserLogin">login</a></h5>
        {/* </form> */}
    </div>
</div>




    </div>
    </>
  )
}
