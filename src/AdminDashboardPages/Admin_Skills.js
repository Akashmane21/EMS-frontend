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
    .get(`${baseUrl}/Skills`)
    .then((response) => {
        console.log(response.data);
        setData(response.data)
    })
    .then((err) => {
      console.log(err);
    });
    }, [])
    

    

    function Delete (id){
       const base = `${baseUrl}/Skills/`
        axios
        .delete(`${base}${id}`)
        .then(() => {
         alert("Deleted Successfully")
        });
    }

    function Submit(values){
        axios
        .post(`${baseUrl}/Skills/`, values)
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
            <h1>Skills - Admin</h1>

          <br /><br /><br />


            <Formik
            initialValues={{ skill_Name: "", skill_Descr: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          Submit(values)
        }}
      >
        <Form>
        <div class="formgroup">
        <label htmlFor="skill_Name">skill Name</label>
          <Field required={true} name="skill_Name" class="form-control" type="text" />
          </div>
          <div class="formgroup">
                <label for="skill_Descr" class="control-label">qualification Descr</label>
          <Field required={true}  name="skill_Descr" class="form-control" type="text" />
            </div>
            <div class="formgroup">
          <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </Form>
      </Formik>


            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">skill Name</th>
      <th scope="col">skill Description</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {Data &&
            Data.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.skill_id}</th>
      <td>{data.skill_Name}</td>
      <td>{data.skill_Descr}</td>
      <td><a href='' onClick={()=>Delete(data.skill_id)}> DELETE</a></td>
    </tr>
            ))}
   
  </tbody>
</table>


            </div>
    </div>
  )
}
