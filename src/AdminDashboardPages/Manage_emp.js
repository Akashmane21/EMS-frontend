import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';
export default function Manage_emp() {
    const { baseUrl} =useCounter()
    const [Data, setData] = useState([])


    useEffect(() => {
     axios
    .get(`${baseUrl}/Employees`)
    .then((response) => {
        console.log(response.data);
        setData(response.data)
    })
    .then((err) => {
      console.log(err);
    });
    }, [])


    function Edit(id){
      window.location.replace(`/Update_emp_det/${id}`)
    }

    function Delete (id){
        const base = `${baseUrl}/Employees/`
        axios
        .delete(`${base}${id}`)
        .then(() => {
         alert("Deleted Successfully")
        });
    }
    function Details(id){
        window.location.replace(`/Emp_Details/${id}`)

    }

  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >
                <BredNav name="Manage Employee" />
            <h1>Manage Employee - Admin</h1>

            <div className="bthns">
                <a className='btn m-3' href='/Add_Emp'>
                    Add
                </a>
                <a className='btn m-3' href='/Manage_sal_det'>
                    Add salary details for Employee
                </a>
              
            </div>

            {/* <form action="" >
            <div class="formgroup">
            <input type="text" placeholder='Search Employee Details' className='form-control' />

                </div>


                <div class="formgroup">
            <input type="text" placeholder='Search by Name' className='form-control' />

                </div>

                <div class="formgroup">
            <input type="text" placeholder='Search by Phone no.' className='form-control' />

                </div>


                </form> */}
<table class="table"> 
            <thead>
    <tr>
      <th scope="col">Employee Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {Data &&
            Data.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.employee_Id}</th>
      <td>{data.fname}</td>
      <td>{data.lname}</td>
      <td>{data.email_Id}</td>
      <td><a  onClick={()=>Edit(data.employee_Id)}> Edit </a>  | 
      <a  onClick={()=>Delete(data.employee_Id)}> Delete </a> |
      <a  onClick={()=>Details(data.employee_Id)}> View details </a> </td>
    </tr>
            ))}
   
   
  </tbody>
</table>


            </div>
    </div>
  )
}
