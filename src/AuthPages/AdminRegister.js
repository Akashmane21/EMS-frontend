import React , { useEffect} from 'react'
import Navbar from '../comps/Navbar'
import axios from "axios";
import { Formik, Field, Form } from "formik";

import { useCounter } from "../ContextDB/Context";
export default function AdminRegister() {
    const { baseUrl} =useCounter()


   

    function Submit(values){
        axios
        .post(`${baseUrl}/Admins/`, values)
        .then((response) => {
          alert("Admin Registered Successfully");
          window.location.replace('/AdminLogin')
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
<h1>Admin Registeration</h1>
    </div>

</center>
<hr />
<div class="row">
    <div class="col-md-4">

    <Formik
            initialValues={{  }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          Submit(values)
        }}
      >
        <Form>
        <div class="formgroup">
        <label htmlFor="admin_Name">Name</label>
          <Field required={true} name="admin_Name" class="form-control" type="text" />
          </div>

          <div class="formgroup">
        <label htmlFor="admin_email">Email</label>
          <Field required={true} name="admin_email" class="form-control" type="text" />
          </div>


          <div class="formgroup">
                <label for="password" class="control-label">Password</label>
          <Field required={true}  name="password" class="form-control" type="text" />
            </div>


            <div class="formgroup">
          <button class="btn btn-primary" type="submit">Register</button>
          </div>
        </Form>
      </Formik>




            <br />
            <br />
            <h5>Already existing user ? <a href="/AdminLogin">login</a></h5>
        {/* </form> */}
    </div>
</div>




    </div>
    </>
  )
}
