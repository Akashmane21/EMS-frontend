import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, input, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';
export default function Generate_payslip() {
    const { baseUrl} =useCounter()
    const [Data, setData] = useState([])


    useEffect(() => {
     axios
    .get(`${baseUrl}/Employees`)
    .then((response) => {
        console.log(response.data);
        setData(response.data);
        
    })
    .then((err) => {
      console.log(err);
    });
    }, [])

    function Load(){
        axios
        .get(`${baseUrl}/Employee_Salary/`)
        .then((response) => {
            console.log(response.data);
            const empsal=response.data.find((e)=> e.employee_Id==parseInt(document.querySelector('#employee_Id').value))
            if (empsal.length!=0) {
                console.log(empsal);
              document.getElementById("basic_Pay").value=empsal.basic_Pay
            document.getElementById("hra").value=empsal.hra
            document.getElementById("conveyance_Allowences").value=empsal.conveyance_Allowences
            document.getElementById("special_Allowences").value=empsal.special_Allowences
            document.getElementById("pf").value=empsal.pf
            document.getElementById("tds").value=empsal.tds
            document.getElementById("gross_Salary").value=empsal.gross_Salary
            document.getElementById("net_Salary").value=empsal.net_Salary
            }
            else{

                alert("Salary for this employee is not Added")
            }
        })
        .then((err) => {
          console.log(err);
        });
    }

    function Submit(){
        const da = document.getElementById("date").value
        var dateArr = da.split("-")
        
        const datas = {
            "month": dateArr[1],
            "year": parseInt(dateArr[0]),
            "basic_Pay": parseInt(document.getElementById("basic_Pay").value),
            "hra": parseInt(document.getElementById("hra").value),
            "conveyance_Allowences": parseInt(document.getElementById("conveyance_Allowences").value),
            "special_Allowences": parseInt(document.getElementById("special_Allowences").value),
            "pf": parseInt(document.getElementById("pf").value),
            "tds": parseInt(document.getElementById("tds").value),
            "gross_Salary":parseInt(document.getElementById("gross_Salary").value),
            "net_Salary": parseInt(document.getElementById("net_Salary").value),
            "employee_Id": parseInt(document.querySelector('#employee_Id').value)
        }

        axios
        .post(`${baseUrl}/Salaries`, datas)
        .then((response) => {
         alert("Successfully Generate the payslip")
        })
        .then((err) => {
          console.log(err);
        });

    }
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >
                <BredNav name="Generate payslip" />
            <h1>Generate payslip - Admin</h1>

          

            
        <div class="formgroup">
            <label for="employee_Id">Select Employee</label>
            <select id="employee_Id" class="form-control">
            {Data &&
            Data.map((data, key) => (
                <option value={data.employee_Id}>{data.employee_Id} - {data.user_Name}</option>
            ))}
            </select>
            </div>
            <div class="formgroup">
            <button className="btn" onClick={Load}>Load Employee Salary</button>
            </div>

            <div class="formgroup">
                <label htmlFor="Month">Month , Year</label>
                <input  required id="date" type="month" class="form-control" />
                </div>

        <div class="formgroup">
                <label htmlFor="Basic pay">Basic pay</label>
                <input  required id="basic_Pay" type="number" class="form-control" />
                </div>
          

                <div class="formgroup">
                <label for="HRA" class="control-label">HRA</label>
                <input required id="hra" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Provident Fund" class="control-label">Provident Fund</label>
                <input required id="pf" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Conveyance Allowances" class="control-label">Conveyance Allowances</label>
                <input required id="conveyance_Allowences" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Special Allowance" class="control-label">Special Allowance</label>
                <input required id="special_Allowences" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="TDS" class="control-label">TDS</label>
                <input required id="tds" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Gross Salary" class="control-label">Gross Salary</label>
                <input required id="gross_Salary" type="number"  class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Net Salary" class="control-label">Net Salary</label>
                <input required id="net_Salary" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <button onClick={Submit} class="btn btn-primary"> Submit </button>
            </div>
               
           


            </div>
    </div>
  )
}
