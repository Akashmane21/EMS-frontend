import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';
export default function Admin_Departments() {
    const { baseUrl} =useCounter()
const [Data, setData] = useState([])
    useEffect(() => {
     axios
    .get(`${baseUrl}/Departments`)
    .then((response) => {
        console.log(response.data);
        setData(response.data)
    })
    .then((err) => {
      console.log(err);
    });
    }, [])
    

    

    function Delete (id){
       const baseu = `${baseUrl}/Departments/`
        axios
        .delete(`${baseu}${id}`)
        .then(() => {
         alert("Deleted Successfully")
        });
    }

    function Submit(values){
        axios
        .post(`${baseUrl}/Departments/`, values)
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
                <BredNav name="Departments" />
            <h1>Departments - Admin</h1>

          <br /><br /><br />


            <Formik
            initialValues={{ department_Name: ""}}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          Submit(values)
        }}
      >
        <Form>
        <div class="formgroup">
        <label htmlFor="department_Name">department Name</label>
          <Field required={true} name="department_Name" class="form-control" type="text" />
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
      <th scope="col">department Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {Data &&
            Data.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.department_Id}</th>
      <td>{data.department_Name}</td>
      <td><a href='' onClick={()=>Delete(data.department_Id)}> DELETE</a></td>
    </tr>
            ))}
   
  </tbody>
</table>


            </div>
    </div>
  )
}
