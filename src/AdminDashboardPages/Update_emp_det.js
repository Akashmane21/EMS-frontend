import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';
export default function Add_Emp() {
  const { baseUrl} =useCounter()
  const params = useParams();

    const [Data, setData] = useState([])
    const [user_Names, setuser_Names] = useState([])
    const [qualifications, setqualifications] = useState([])
    const [departments, setdepartments] = useState([])
    const [roles, setroles] = useState([])

    useEffect(() => {
    
    axios
    .get(`${baseUrl}/Roles`)
    .then((response) => {
        setroles(response.data)
    })
    .then((err) => {
      console.log(err);
    });

    axios
    .get(`${baseUrl}/Qualifications`)
    .then((response) => {
        setqualifications(response.data)
    })
    .then((err) => {
      console.log(err);
    });

    axios
    .get(`${baseUrl}/Departments`)
    .then((response) => {
        setdepartments(response.data)
    })
    .then((err) => {
      console.log(err);
    });

    axios
    .get(`${baseUrl}/Users`)
    .then((response) => {
        setuser_Names(response.data)
    })
    .then((err) => {
      console.log(err);
    });

    axios
    .get(`${baseUrl}/Employees/${params.id}`)
    .then(async (response) => {
      console.log(response.data);
      const dataa = response.data
        setData(response.data);

        document.getElementById("Fname").value= dataa.fname
        document.getElementById("Mname").value= dataa.mname
        document.getElementById("Lname").value= dataa.lname
        document.getElementById("Phone_No").value= dataa.phone_No
        document.getElementById("Email_id").value= dataa.email_Id
        document.getElementById("PanCard_No").value= dataa.panCard_No
        document.getElementById("Bank_Name").value= dataa.bank_Name
        document.getElementById("Account_No").value= dataa.account_No
        document.getElementById("IFSC").value= dataa.ifsc
        document.getElementById("Street_Name").value= dataa.street_Name
        document.getElementById("City").value= dataa.city
        document.getElementById("State").value= dataa.state
    })
    .then((err) => {
      console.log(err);
    });

    }, [])

   
  
    function Submit(){
        const data = {
          "employee_Id" : Data.employee_Id,
            "fname": document.getElementById("Fname").value,
            "mname": document.getElementById("Mname").value,
            "lname": document.getElementById("Lname").value,
            "dob":  Data.dob,
            "phone_No": document.getElementById("Phone_No").value,
            "email_Id": document.getElementById("Email_id").value,
            "panCard_No": document.getElementById("PanCard_No").value,
            "doj": Data.doj,
            "bank_Name": document.getElementById("Bank_Name").value,
            "account_No": parseInt(document.getElementById("Account_No").value),
            "ifsc": document.getElementById("IFSC").value,
            "street_Name": document.getElementById("Street_Name").value,
            "city": document.getElementById("City").value,
            "state": document.getElementById("State").value,
            "is_Admin": '0',
            "create_Date": Data.create_Date,
            "modify_Date": new Date(),
            "role_id": parseInt(document.querySelector('#Role').value),
            "department_Id": parseInt(document.querySelector('#Department').value),
            "qualification_id": Data.qualification_id,
            "user_Name": Data.user_Name
          }

        //   alert(JSON.stringify(data, null, 2));
        //   console.log(data);
        axios
        .put(`${baseUrl}/Employees/${Data.employee_Id}`, data)
        .then((response) => {
         alert("Successfully Added")
         console.log(response);
        })
        .then((err) => {
          console.log(err);
        });
    }

  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >
                <BredNav name="Employee Details" />
            <h1>Update Employee Details - Admin</h1>

           
      

            <div class="formgroup">
                <label htmlFor="First Name">First Name</label>
                <input  required={true} name="Fname" id="Fname" type="text" class="form-control" />
                </div>

                <div class="formgroup">
                <label for="Middle Name" class="control-label">Middle Name</label>
                <input required={true} name="Mname" id="Mname" type="text" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Last Name" class="control-label">Last Name</label>
                <input required={true} name="Lname" id="Lname"  type="text" class="form-control" />
            </div>
            
         

            

            <div class="formgroup">
                <label for="Phone no." class="control-label">Phone no.</label>
                <input required={true} name="Phone_No" id="Phone_No"  type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Email id" class="control-label">Email id</label>
                <input required={true} name="Email_id" id="Email_id"  type="email" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="PAN no." class="control-label">PAN no.</label>
                <input required={true} name="PanCard_No" id="PanCard_No" type="text" class="form-control" />
            </div>

           

            <div class="formgroup">
                <label for="Street name" class="control-label">Street name</label>
                <input required={true} name="Street_Name" id="Street_Name" type="text" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="City" class="control-label">City</label>
                <input required={true} name="City" id="City" type="text" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="State" class="control-label">State</label>
                <input required={true} name="State" id="State" type="text" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Bank Name" class="control-label">Bank Name</label>
                <input required={true} name="Bank_Name" id="Bank_Name" type="text" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Account no." class="control-label">Account no.</label>
                <input required={true} name="Account_No" id="Account_No" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="IFSC" class="control-label">IFSC</label>
                <input required={true} name="IFSC" id="IFSC" type="text" class="form-control" />
            </div>

            <div class="formgroup">
            <label for="Role">Role</label>
            <select id="Role" class="form-control">
            {roles &&
            roles.map((data, key) => (
                <option value={data.role_id}>{data.role_id} - {data.role_Name}</option>
            ))}
            </select>
            </div>

         

            <div class="formgroup">
            <label for="Department">Department</label>
            <select id="Department" class="form-control">
            {departments &&
            departments.map((data, key) => (
                <option value={data.department_Id}>{data.department_Id} - {data.department_Name}</option>
            ))}
            </select>
            </div>



           


            <div class="formgroup">
          <button class="btn btn-primary" onClick={Submit}>Submit</button>
          </div>
       

          



            </div>
    </div>
  )
}
