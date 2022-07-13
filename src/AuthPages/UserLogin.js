

  import Navbar from '../comps/Navbar'
  import axios from "axios";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import React , { useEffect} from 'react'
  import { Formik, Field, Form } from "formik";
  
  import { useCounter } from "../ContextDB/Context";
     
  export default function Login() {
    const { baseUrl} =useCounter()
  
  
  
    function login(values){
   
      axios
      .get(`${baseUrl}/Users`)
      .then((response) => {

        const Data = response.data;
        console.log(Data);
        const user = Data.find(e => e.user_Name==values.user_Name)
        console.log(user);
  
        if(user!=undefined){
          if(user.password==values.password){

            axios
            .get(`${baseUrl}/Employees`)
            .then((response) => {
              const Data = response.data;
              const allemps = response.data.filter((e)=> e.user_Name == values.user_Name )

              console.log(Data);
              console.log(allemps);

              if(allemps.length !=0){
                toast("Welcome");
                localStorage.setItem("Auth" , "true")
                localStorage.setItem("Userinfo" , JSON.stringify(user))
                localStorage.setItem("Empinfo" , JSON.stringify(allemps[0]))
                window.location.replace('/Employee_Dashboard')
              }
              else{
                
            toast("You are not an Employee yet , Contact with an Admin");

              }

              
            
            })
            .then((err) => {
              console.log(err);
            });


  
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

<img src="https://tse1.mm.bing.net/th/id/OIP.3a-B5elyG2BjaTpvVV2hhgHaHa?pid=ImgDet&rs=1" alt="" />
<h1>Employee Login</h1>
    </div>

</center>

<hr />
<div class="row">
<div class="col-md-4    ">
    
<Formik
            initialValues={{  }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          login(values)
        }}
      >
        <Form>
        <div class="formgroup">
        <label htmlFor="user_Name">Name</label>
          <Field required={true} name="user_Name" class="form-control" type="text" />
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
