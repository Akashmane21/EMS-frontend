import React , {useEffect , useState } from 'react'
import Menu from './Menu'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useCounter } from "../ContextDB/Context";
import BredNav from './BredNav';
export default function Add_Emp() {
    const { baseUrl} =useCounter()

    const [Data, setData] = useState([])
    const [user_Names, setuser_Names] = useState([])
    const [qualifications, setqualifications] = useState([])
    const [departments, setdepartments] = useState([])
    const [roles, setroles] = useState([])
    const [allusers, setallusers] = useState([])

    useEffect(() => {
     axios
    .get(`${baseUrl}/Employees`)
    .then((response) => {
        setData(response.data)
    })
    .then((err) => {
      console.log(err);
    });
    axios
    .get(`${baseUrl}/Users`)
    .then((response) => {
        const users = []
        const empsnames =[]
        setallusers(response.data)
        for (let i = 0; i < response.data.length; i++) {
            const element = response.data[i];
            users.push(element.user_Name)
        }
        
        for (let j = 0; j < Data.length; j++) {
            const em = Data[j];
            empsnames.push(em.user_Name)
            
        }

        
        const uuser = users.filter(val => !empsnames.includes(val));
        setuser_Names(uuser)

        
    })
    .then((err) => {
      console.log(err);
    });
   
    axios
    .get(`${baseUrl}/Roles`)
    .then((response) => {
        setroles(response.data)
    })
    .then((err) => {
      console.log(err);
    });

    axios
    .get(`${baseUrl}/Qualifications`)
    .then((response) => {
        setqualifications(response.data)
    })
    .then((err) => {
      console.log(err);
    });

    axios
    .get(`${baseUrl}/Departments`)
    .then((response) => {
        setdepartments(response.data)
    })
    .then((err) => {
      console.log(err);
    });

   

 
 
    }, [])

    function Getnames(){
        const users = []
        const empsnames =[]
        
        for (let i = 0; i < allusers.length; i++) {
            const element = allusers[i];
            users.push(element.user_Name)
        }
        
        for (let j = 0; j < Data.length; j++) {
            const em = Data[j];
            empsnames.push(em.user_Name)
            
        }

        
        const uuser = users.filter(val => !empsnames.includes(val));
        setuser_Names(uuser)
    }


    function Submit(values){
        const data = {
            "fname": values.Fname,
            "mname": values.Mname,
            "lname": values.Lname,
            "dob":  values.DOB,
            "phone_No": values.Phone_No,
            "email_Id": values.Email_id,
            "panCard_No": values.PanCard_No,
            "doj": values.DOJ,
            "bank_Name": values.Bank_Name,
            "account_No": values.Account_No,
            "ifsc": values.IFSC,
            "street_Name": values.Street_Name,
            "city": values.City,
            "state": values.State,
            "is_Admin": '0',
            "create_Date": new Date(),
            "modify_Date": new Date(),
            "role_id": parseInt(document.querySelector('#Role').value),
            "department_Id": parseInt(document.querySelector('#Department').value),
            "qualification_id": parseInt(document.querySelector('#Qualification').value),
            "user_Name": document.querySelector('#User_Name').value
          }

        //   alert(JSON.stringify(data, null, 2));
        //   console.log(data);
        axios
        .post(`${baseUrl}/Employees/`, data)
        .then((response) => {
         alert("Successfully Added")
         console.log(response);
        })
        .then((err) => {
          console.log(err);
        });
    }

  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >
                <BredNav name="Add Employee" />
            <h1>Add Employee - Admin</h1>

            <Formik
            initialValues={{  }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          Submit(values)
        }}
      >
        <Form>
      

            <div class="formgroup">
                <label htmlFor="First Name">First Name</label>
                <Field  required={true} name="Fname" type="text" class="form-control" />
                </div>

                <div class="formgroup">
                <label for="Middle Name" class="control-label">Middle Name</label>
                <Field required={true} name="Mname" type="text" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Last Name" class="control-label">Last Name</label>
                <Field required={true} name="Lname"  type="text" class="form-control" />
            </div>

            <div class="formgroup">
                {/* <label for="Last Name" class="control-label">Get User names</label> */}
                <button    class="btn" onClick={Getnames}> Get User names</button>
            </div>


            
            <div class="formgroup">
            <label for="User_Name">UserName</label>
            <select id="User_Name" class="form-control">
            {user_Names &&
            user_Names.map((data, key) => (
                <option value={data}>{data}</option>
            ))}
            </select>
            </div>

            <div class="formgroup">
                <label for="DOB" class="control-label">DOB</label>
                <Field required={true} name="DOB" type="date" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Phone no." class="control-label">Phone no.</label>
                <Field required={true} name="Phone_No" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Email id" class="control-label">Email id</label>
                <Field required={true} name="Email_id" type="email" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="PAN no." class="control-label">PAN no.</label>
                <Field required={true} name="PanCard_No" type="text" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="DOJ" class="control-label">DOJ</label>
                <Field required={true} name="DOJ" type="date" class="form-control" />
            </div>

           

            <div class="formgroup">
                <label for="Street name" class="control-label">Street name</label>
                <Field required={true} name="Street_Name" type="text" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="City" class="control-label">City</label>
                <Field required={true} name="City" type="text" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="State" class="control-label">State</label>
                <Field required={true} name="State" type="text" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Bank Name" class="control-label">Bank Name</label>
                <Field required={true} name="Bank_Name" type="text" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Account no." class="control-label">Account no.</label>
                <Field required={true} name="Account_No" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="IFSC" class="control-label">IFSC</label>
                <Field required={true} name="IFSC" type="text" class="form-control" />
            </div>

            <div class="formgroup">
            <label for="Role">Role</label>
            <select id="Role" class="form-control">
            {roles &&
            roles.map((data, key) => (
                <option value={data.role_id}>{data.role_id} - {data.role_Name}</option>
            ))}
            </select>
            </div>

            <div class="formgroup">
            <label for="Qualification">Qualification</label>
            <select id="Qualification" class="form-control">
            {qualifications &&
            qualifications.map((data, key) => (
                <option value={data.qualification_Id}>{data.qualification_Id} - {data.qualification_Name}</option>
            ))}
            </select>
            </div>

            <div class="formgroup">
            <label for="Department">Department</label>
            <select id="Department" class="form-control">
            {departments &&
            departments.map((data, key) => (
                <option value={data.department_Id}>{data.department_Id} - {data.department_Name}</option>
            ))}
            </select>
            </div>



           


            <div class="formgroup">
          <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </Form>
      </Formik>

          



            </div>
    </div>
  )
}
