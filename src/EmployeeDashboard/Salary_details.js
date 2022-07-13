import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';

export default function Salary_details() {

    const { baseUrl} =useCounter()
  const params = useParams();

    const [Data, setData] = useState(null)
    

    useEffect(() => {
    
        axios
        .get(`${baseUrl}/Salaries/${params.id}`)
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
      
               
            {/* <div className="rightbody" > */}

                {/* <BredNav name="Salary Details" /> */}
                
            <h1 
            style={{ padding:20 , fontFamily:"serif" }}
            >Salary Slip - </h1>
            {Data &&
            <>
            <dl class="row info m-3">
        <dt class = "col-sm-3">
        month
        </dt>
        <dd class = "col-sm-3">
        {Data.month}
        </dd>
        <dt class = "col-sm-3">
        year
        </dt>
        <dd class = "col-sm-3">
            {Data.year}
        </dd>
        <dt class = "col-sm-3">
        basic_Pay : 
        </dt>
        <dd class = "col-sm-3">
            {Data.basic_Pay}
        </dd>
        <dt class = "col-sm-3">
        hra
        </dt>
        <dd class = "col-sm-3">
            {Data.hra}
        </dd>
        <dt class = "col-sm-3">
        conveyance_Allowences
        </dt>
        <dd class = "col-sm-3">
            {Data.conveyance_Allowences}
        </dd>
       
        <dt class = "col-sm-3">
        special_Allowences:
        </dt>
        <dd class = "col-sm-3">
            {Data.special_Allowences}
        </dd>
        <dt class = "col-sm-3">
        pf
        </dt>
        <dd class = "col-sm-3">
            {Data.tds}
        </dd>
         <dt class = "col-sm-3">
         gross_Salary
        </dt>
        <dd class = "col-sm-3">
           {Data.gross_Salary}
        </dd>
        <dt class = "col-sm-3">
        net_Salary
        </dt>
        <dd class = "col-sm-3">
           {Data.net_Salary}
        </dd>
       
    </dl>
      
    </> 
}

            {/* </div> */}
    </div>
  )
}
