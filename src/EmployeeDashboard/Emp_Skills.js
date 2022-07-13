import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';

export default function Emp_Skills() {
    const { baseUrl} =useCounter()
const [Data, setData] = useState([])
const [Skills, setSkills] = useState([])

    useEffect(() => {
     axios
    .get(`${baseUrl}/Skills`)
    .then((response) => {
        console.log(response.data);
        setSkills(response.data)
    })

    .then((err) => {
      console.log(err);
    });


    axios
    .get(`${baseUrl}/Employee_Skill/`)
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
       const baseUR = `${baseUrl}/Employee_Skill/`
        axios
        .delete(`${baseUR}${id}`)
        .then(() => {
         alert("Deleted Successfully")
        });
    }

    function Submit(){
        const name =document.querySelector('#Skill').value
        var qua = name.split("-")
        const Empdata = JSON.parse(localStorage.getItem("Empinfo"))

        const data = {
            "employee_Id": Empdata.employee_Id,
            "skill_Id": parseInt(qua[0]),
            "skill_Name": qua[1]
        }
       
        axios
        .post(`${baseUrl}/Employee_Skill/`, data)
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
                <BredNav name="Skills" />
            <h1>Skills - Employee</h1>

          <br /><br /><br />

           <h3>Add your Skills :</h3>
           

            
        <div class="formgroup">
            <label for="Skill">Select Skill</label>
            <select id="Skill" class="form-control">
            {Skills &&
            Skills.map((data, key) => (
                <option value={data.skill_id + "-"+ data.skill_Name}>{data.skill_id} - {data.skill_Name}</option>
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
      <td>{data.skill_Name}</td>
      <td><a href='' onClick={()=>Delete(data.id)}> DELETE</a></td>
    </tr>
            ))}
   
  </tbody>
</table>


            </div>
    </div>
  )
}
