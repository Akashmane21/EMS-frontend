import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';
export default function Emp_Qualification() {
    const { baseUrl} =useCounter()
const [Data, setData] = useState([])
const [qualifications, setqualifications] = useState([])
    useEffect(() => {
     axios
    .get(`${baseUrl}/Qualifications`)
    .then((response) => {
        console.log(response.data);
        setqualifications(response.data)
    })

    .then((err) => {
      console.log(err);
    });


    axios
    .get(`${baseUrl}/Employee_Qualification/`)
    .then((response) => {
        const Empdata = JSON.parse(localStorage.getItem("Empinfo"))
        const alldata = response.data.filter((e)=> e.employee_Id == Empdata.employee_Id)
        setData(alldata)
    })
    .then((err) => {
      console.log(err);
    });


    }, [])
    

    

    function Delete (id){
       const base = `${baseUrl}/Employee_Qualification/`
        axios
        .delete(`${base}${id}`)
        .then(() => {
         alert("Deleted Successfully")
        });
    }

    function Submit(){
        const name =document.querySelector('#Qualification').value
        var qua = name.split("-")
        const Empdata = JSON.parse(localStorage.getItem("Empinfo"))

        const data = {
            "employee_Id": Empdata.employee_Id,
            "qualification_id": parseInt(qua[0]),
            "qualification_Name": qua[1]
        }
        axios
        .post(`${baseUrl}/Employee_Qualification/`, data)
        .then((response) => {
         alert("Successfully Added")
         window.location.reload()
        })
        .then((err) => {
          console.log(err);
        });
    }
   
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >
                <BredNav name="Qualification" />
            <h1>Qualification - Employee</h1>

          <br /><br /><br />

          <h3>Add your Qualification</h3>

            
        <div class="formgroup">
            <label for="Qualification">Select Qualification</label>
            <select id="Qualification" class="form-control">
            {qualifications &&
            qualifications.map((data, key) => (
                <option value={data.qualification_Id + "-"+ data.qualification_Name}>{data.qualification_Id} - {data.qualification_Name}</option>
            ))}
            </select>
            </div>

      
          
            <div class="formgroup">
          <button class="btn btn-primary" onClick={Submit}>Add Now</button>
          </div>
     


            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">qualification_Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {Data &&
            Data.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.id}</th>
      <td>{data.qualification_Name}</td>
      <td><a href='' onClick={()=>Delete(data.id)}> DELETE</a></td>
    </tr>
            ))}
   
  </tbody>
</table>


            </div>
    </div>
  )
}
