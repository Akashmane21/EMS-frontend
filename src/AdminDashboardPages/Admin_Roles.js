import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';
export default function Admin_Roles() {
    const { baseUrl} =useCounter()
const [Data, setData] = useState([])
    useEffect(() => {
     axios
    .get(`${baseUrl}/Roles`)
    .then((response) => {
        console.log(response.data);
        setData(response.data)
    })
    .then((err) => {
      console.log(err);
    });
    }, [])
    

    

    function Delete (id){
       const base = `${baseUrl}/Roles/`
        axios
        .delete(`${base}${id}`)
        .then(() => {
         alert("Deleted Successfully")
        });
    }

    function Submit(values){
        axios
        .post(`${baseUrl}/Roles/`, values)
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
                <BredNav name="Roles" />
            <h1>role - Admin</h1>

          <br /><br /><br />


            <Formik
            initialValues={{ role_Name: "", role_Descr: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          Submit(values)
        }}
      >
        <Form>
        <div class="formgroup">
        <label htmlFor="role_Name">Role Name</label>
          <Field required={true} name="role_Name" class="form-control" type="text" />
          </div>
          <div class="formgroup">
                <label for="role_Descr" class="control-label">Role Descr</label>
          <Field required={true}  name="role_Descr" class="form-control" type="text" />
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
      <th scope="col">Role Name</th>
      <th scope="col">Role Descr</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {Data &&
            Data.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.role_id}</th>
      <td>{data.role_Name}</td>
      <td>{data.role_Descr}</td>
      <td><a href='' onClick={()=>Delete(data.role_id)}> DELETE</a></td>
    </tr>
            ))}
   
  </tbody>
</table>


            </div>
    </div>
  )
}
