import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';
export default function Admin_Qualification() {
    const { baseUrl} =useCounter()
const [Data, setData] = useState([])
    useEffect(() => {
     axios
    .get(`${baseUrl}/Qualifications`)
    .then((response) => {
        console.log(response.data);
        setData(response.data)
    })
    .then((err) => {
      console.log(err);
    });
    }, [])
    

    

    function Delete (id){
       const base = `${baseUrl}/Qualifications/`
        axios
        .delete(`${base}${id}`)
        .then(() => {
         alert("Deleted Successfully")
        });
    }

    function Submit(values){
        axios
        .post(`${baseUrl}/Qualifications/`, values)
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
                <BredNav name="Admin_Qualification" />
            <h1>Qualification - Admin</h1>

          <br /><br /><br />


            <Formik
            initialValues={{ qualification_Name: "", qualification_Descr: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          Submit(values)
        }}
      >
        <Form>
        <div class="formgroup">
        <label htmlFor="qualification_Name">qualification Name</label>
          <Field required={true} name="qualification_Name" class="form-control" type="text" />
          </div>
          <div class="formgroup">
                <label for="qualification_Descr" class="control-label">qualification Descr</label>
          <Field required={true}  name="qualification_Descr" class="form-control" type="text" />
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
      <th scope="col">qualification_Name</th>
      <th scope="col">qualification_Descr</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {Data &&
            Data.map((data, key) => (
             
    <tr key={key}>
      <th scope="row">{data.qualification_Id}</th>
      <td>{data.qualification_Name}</td>
      <td>{data.qualification_Descr}</td>
      <td><a href='' onClick={()=>Delete(data.qualification_Id)}> DELETE</a></td>
    </tr>
            ))}
   
  </tbody>
</table>


            </div>
    </div>
  )
}
