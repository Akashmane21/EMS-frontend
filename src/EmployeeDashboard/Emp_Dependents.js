import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';
export default function Admin_Skills() {
    const { baseUrl} =useCounter()
const [Data, setData] = useState([])
    useEffect(() => {
     axios
    .get(`${baseUrl}/Employee_Dependent`)
    .then((response) => {
        console.log(response.data);
        const Empdata = JSON.parse(localStorage.getItem("Empinfo"))
        const alldata = response.data.filter((e)=> e.employee_Id == Empdata.employee_Id)
        setData(alldata)
        // setData(response.data)
    })
    .then((err) => {
      console.log(err);
    });
    }, [])
    

    

    function Delete (id){
       const base = `${baseUrl}/Employee_Dependent/`
        axios
        .delete(`${base}${id}`)
        .then(() => {
         alert("Deleted Successfully")
        });
    }

    function Submit(){
       
        var ele = document.getElementsByName('gender');
              
        for(let i = 0; i < ele.length; i++) {
            if(ele[i].checked)
           {
            
            const Empdata = JSON.parse(localStorage.getItem("Empinfo"))

            
               const data = {
                   "dependent_Name":  document.getElementById("dependent_Name").value,
                   "relationship": document.getElementById("relationship").value,
                   "phone": document.getElementById("phone").value,
                   "dob": document.getElementById("dob").value,
                   "gender": ele[i].value,
                   "employee_Id": Empdata.employee_Id
                 }
                 axios
                 .post(`${baseUrl}/Employee_Dependent/`, data)
                 .then((response) => {
                  alert("Successfully Added")
                  window.location.reload()
                 })
                 .then((err) => {
                   console.log(err);
                 });


                }
        }
        
    }
   
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >
                <BredNav name="Dependents" />
                
            <h1>Your Dependent - Employee</h1>

          <br /><br /><br />



<h2>Add Dependent :</h2>
        <div class="formgroup">
        <label htmlFor="dependent_Name">dependent_Name</label>
          <input required={true} id="dependent_Name" class="form-control" type="text" />
          </div>

          <div class="formgroup">
            <label for="relationship" class="control-label">relationship</label>
          <input required={true}  id="relationship" class="form-control" type="text" />
            </div>

          <div class="formgroup">
        <label htmlFor="phone">phone</label>
          <input required={true} id="phone" class="form-control" type="text" />
          </div>

          <div class="formgroup">
                <label for="dob" class="control-label">DOB</label>
          <input required={true}  id="dob" class="form-control" type="date" />
            </div>
           

          
            <div class="formgroup">

       
            Gender : 
            <br />
    <input type="radio" class="form-check-input" name="gender" value="1" checked /> Male <br />  
    <input type="radio" class="form-check-input" name="gender" value="0" /> Female
      
    <br></br>
         </div>



          <div class="formgroup">
          <button class="btn btn-primary" onClick={Submit}>Submit</button>
          </div>
          <br /><br />


            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">dependent_Name</th>
      <th scope="col">relationship</th>
      <th scope="col">phone</th>
      <th scope="col">gender</th>
      <th scope="col">dob</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
  {Data &&
            Data.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.dependent_Id}</th>
      <td>{data.dependent_Name}</td>
      <td>{data.relationship}</td>
      <td>{data.phone}</td>
      {data.gender=="1" ? 
      <td>Male</td>:
      <td>Female</td>
      }
      <td>{data.dob}</td>
      <td><a onClick={()=> Delete()}>Delete</a></td>

      <td><a href='' onClick={()=>Delete(data.dependent_Id)}> DELETE</a></td>
    </tr>
            ))}
   
  </tbody>
</table>


            </div>
    </div>
  )
}
