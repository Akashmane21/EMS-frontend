import Navbar from '../comps/Navbar'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React , { useEffect} from 'react'
import { Formik, Field, Form } from "formik";

import { useCounter } from "../ContextDB/Context";
   
export default function AdminLogin() {
  const { baseUrl} =useCounter()



  function login(values){
 
    axios
    .get(`${baseUrl}/Admins`)
    .then((response) => {
      const Data = response.data;
      console.log(Data);
      const user = Data.find(e => e.admin_Name==values.admin_Name)
      console.log(user);

      if(user!=undefined){
        if(user.password==values.password){
          toast("Welcome");
          localStorage.setItem("Auth" , "true")
          window.location.replace('/Admin_Dashboard')
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
 <Navbar />
<div className='m-4'>
   
<center>
    <div className="registertitle">

<img src="https://static.vecteezy.com/system/resources/previews/000/379/274/non_2x/user-management-vector-icon.jpg" alt="" />
<h1>Admin Login</h1>
    </div>

</center>

<hr />
<div class="row">
<div class="col-md-3    ">

<Formik
            initialValues={{  }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          login(values)
        }}
      >
        <Form>
        <div class="formgroup">
        <label htmlFor="admin_Name">Name</label>
          <Field required={true} name="admin_Name" class="form-control" type="text" />
          </div>


          <div class="formgroup">
                <label for="password" class="control-label">Password</label>
          <Field required={true}  name="password" class="form-control" type="password" />
            </div>


            <div class="formgroup">
          <button class="btn btn-primary" type="submit">Login</button>
          </div>
        </Form>
      </Formik>


        <br />
            <h5>New User ? <a href="/AdminRegister">Register</a></h5>
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
