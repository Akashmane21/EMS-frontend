import React , { useEffect} from 'react'
import Navbar from '../comps/Navbar'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";

export default function UserRegister() {

    const { baseUrl} =useCounter()


 

    function Submit(values){
        console.log(values);
        console.log(`${baseUrl}/Users/`);
        axios
        .post(`${baseUrl}/Users/`, values)
        .then((response) => {
          alert("User Registered Successfully");
          console.log(response.data);
          window.location.replace('/UserLogin')
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

<img src="https://tse1.mm.bing.net/th/id/OIP.3a-B5elyG2BjaTpvVV2hhgHaHa?pid=ImgDet&rs=1" alt="" />
<h1>Employee Registeration</h1>
    </div>

</center>
<hr />
<div class="row">
    <div class="col-md-4 ">
        {/* <form > */}

        <Formik
            initialValues={{  }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          Submit(values)
        }}
      >
        <Form>
        <div class="formgroup">
        <label htmlFor="user_Name">Name</label>
          <Field required={true} name="user_Name" class="form-control" type="text" />
          </div>

          <div class="formgroup">
        <label htmlFor="user_email">Email</label>
          <Field required={true} name="user_email" class="form-control" type="email" />
          </div>


          <div class="formgroup">
                <label for="password" class="control-label">Password</label>
          <Field required={true}  name="password" type="password" class="form-control"  />
            </div>


            <div class="formgroup">
          <button class="btn btn-primary" type="submit">Register</button>
          </div>
        </Form>
      </Formik>

      
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
