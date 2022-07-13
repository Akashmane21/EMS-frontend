import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';

export default function Emp_Details() {

    const { baseUrl} =useCounter()
  const params = useParams();

    const [Data, setData] = useState(null)
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
    })
    .then((err) => {
      console.log(err);
    });

    }, [])

   
  
   
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >

                <BredNav name="Employee Details" />
                
            <h1>Employee Details - Admin</h1>
            {Data &&
            <>
            <dl class="row info m-3">
        <dt class = "col-sm-2">
            First Name
        </dt>
        <dd class = "col-sm-10">
        {Data.fname}
        </dd>
        <dt class = "col-sm-2">
        Middle Name
        </dt>
        <dd class = "col-sm-10">
            {Data.mname}
        </dd>
        <dt class = "col-sm-2">
        Last Name : 
        </dt>
        <dd class = "col-sm-10">
            {Data.lname}
        </dd>
        <dt class = "col-sm-2">
        DOB
        </dt>
        <dd class = "col-sm-10">
            {Data.dob}
        </dd>
        <dt class = "col-sm-2">
            Date of joining
        </dt>
        <dd class = "col-sm-10">
            {Data.doj}
        </dd>
       
        <dt class = "col-sm-2">
        User Name:
        </dt>
        <dd class = "col-sm-10">
            {Data.user_Name}
        </dd>
        <dt class = "col-sm-2">
        Address
        </dt>
        <dd class = "col-sm-10">
            {Data.street_Name} , {Data.city} , {Data.state}
        </dd>
         <dt class = "col-sm-2">
         Bank Name
        </dt>
        <dd class = "col-sm-10">
           {Data.bank_Name}
        </dd>
        <dt class = "col-sm-2">
        Account No
        </dt>
        <dd class = "col-sm-10">
           {Data.account_No}
        </dd>
        <dt class = "col-sm-2">
         IFSC
        </dt>
        <dd class = "col-sm-10">
           {Data.ifsc}
        </dd>
        <dt class = "col-sm-2">
        panCard No
        </dt>
        <dd class = "col-sm-10">
           {Data.panCard_No}
        </dd>
        <dt class = "col-sm-2">
        phone_No
        </dt>
        <dd class = "col-sm-10">
           {Data.phone_No}
        </dd>
        <dt class = "col-sm-2">
        Email Id
        </dt>
        <dd class = "col-sm-10">
           {Data.email_Id}
        </dd>
        <dt class = "col-sm-2">
        Role id
        </dt>
        <dd class = "col-sm-10">
           {Data.role_id}
        </dd>
        <dt class = "col-sm-2">
        Department Id
        </dt>
        <dd class = "col-sm-10">
           {Data.department_Id}
        </dd>
    </dl>
      
    </> 
}

            </div>
    </div>
  )
}
