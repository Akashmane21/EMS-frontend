import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';
export default function Emp_Payslips() {
    const { baseUrl} =useCounter()

const [Data, setData] = useState([])

    useEffect(() => {
     axios
    .get(`${baseUrl}/Salaries`)
    .then((response) => {
        console.log(response.data);
        const Empdata = JSON.parse(localStorage.getItem("Empinfo"))
        const alldata = response.data.filter((e)=> e.employee_Id == Empdata.employee_Id)
        setData(alldata)
    })
    .then((err) => {
      console.log(err);
    });
    }, [])
    

    
function ViewDetails(id){
window.location.replace(`/Salary_details/${id}`)
}
    
   
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >
                <BredNav name="Payslips" />
            <h1>Your all Payslips - Employee</h1>

       
<br /><br /><br />

            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Month</th>
      <th scope="col">Year</th>
      <th scope="col">Basic Pay</th>
      <th scope="col">gross_Salary</th>
      <th scope="col">Net Salary</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {Data &&
            Data.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.salary_Id}</th>
      <td>{data.month}</td>
      <td>{data.year}</td>
      <td>{data.basic_Pay}</td>
      <td>{data.gross_Salary}</td>
      <td>{data.net_Salary}</td>
      <td> <a onClick={()=> ViewDetails(data.salary_Id)}>View details</a> </td>
      
    </tr>
            ))}
   
  </tbody>
</table>


            </div>
    </div>
  )
}
