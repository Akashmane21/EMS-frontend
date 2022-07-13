import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';
export default function Manage_sal_det() {
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

    function Submit(values){
        const datas = {
            "basic_Pay": values.basic_Pay,
            "hra": values.hra,
            "conveyance_Allowences": values.conveyance_Allowences,
            "special_Allowences": values.special_Allowences,
            "pf": values.pf,
            "tds": values.tds,
            "gross_Salary": values.gross_Salary,
            "net_Salary": values.net_Salary,
            "employee_Id": parseInt(document.querySelector('#employee_Id').value)
        }

        axios
        .post(`${baseUrl}/Employee_Salary/`, datas)
        .then((response) => {
         alert("Successfully Added")
        })
        .then((err) => {
          console.log(err);
        });

    }

  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >
                <BredNav name="Salary" />
            <h1>Manage Salary Details - Admin</h1>

          
            <Formik
            initialValues={{  }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          Submit(values)
        }}
      >
        <Form>
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
                <label htmlFor="Basic pay">Basic pay</label>
                <Field  required={true} name="basic_Pay" type="number" class="form-control" />
                </div>
          

                <div class="formgroup">
                <label for="HRA" class="control-label">HRA</label>
                <Field required={true} name="hra" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Provident Fund" class="control-label">Provident Fund</label>
                <Field required={true} name="pf" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Conveyance Allowances" class="control-label">Conveyance Allowances</label>
                <Field required={true} name="conveyance_Allowences" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Special Allowance" class="control-label">Special Allowance</label>
                <Field required={true} name="special_Allowences" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="TDS" class="control-label">TDS</label>
                <Field required={true} name="tds" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Gross Salary" class="control-label">Gross Salary</label>
                <Field required={true} name="gross_Salary" type="number"  class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Net Salary" class="control-label">Net Salary</label>
                <Field required={true} name="net_Salary" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <button type='submit' class="btn btn-primary"  > Submit </button>
            </div>
                </Form>
                </Formik>
           


            </div>
    </div>
  )
}
