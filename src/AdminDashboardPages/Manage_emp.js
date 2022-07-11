import React from 'react'
import Menu from './Menu'

export default function Manage_emp() {
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >
            <h1>Manage Employee - Admin</h1>

            <div className="bthns">
                <a className='btn m-3'>
                    Add
                </a>
                <a href='Update_sal_det' className='btn m-3'>
                    Update
                </a>
                <a className='btn m-3'>
                    Delete
                </a>
            </div>

            <form action="" >
            <div class="formgroup">
                <label htmlFor="First Name">First Name</label>
                <input  required id="Fname" class="form-control" />
                </div>

                <div class="formgroup">
                <label for="Middle Name" class="control-label">Middle Name</label>
                <input required id="Mname" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Last Name" class="control-label">Last Name</label>
                <input required id="Lname" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="DOB" class="control-label">DOB</label>
                <input required id="Lname" type="date" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Phone no." class="control-label">Phone no.</label>
                <input required id="Lname" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Email id" class="control-label">Email id</label>
                <input required id="Lname" type="email" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="PAN no." class="control-label">PAN no.</label>
                <input required id="Lname"  class="form-control" />
            </div>

            <div class="formgroup">
                <label for="DOJ" class="control-label">DOJ</label>
                <input required id="Lname" type="date" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Address" class="control-label">Address</label>
                <input required id="Lname" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Street name" class="control-label">Street name</label>
                <input required id="Lname"  class="form-control" />
            </div>

            <div class="formgroup">
                <label for="City" class="control-label">City</label>
                <input required id="Lname" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="State" class="control-label">State</label>
                <input required id="Lname" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Bank Name" class="control-label">Bank Name</label>
                <input required id="Lname"  class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Account no." class="control-label">Account no.</label>
                <input required id="Lname" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="IFSC" class="control-label">IFSC</label>
                <input required id="Lname" class="form-control" />
            </div>

            <div class="formgroup">
            <label for="Skills">Skills</label>

<select id="Skills" class="form-control">
  <option value="1 - Sql">1 - Sql</option>
  
</select>

</div>


<div class="formgroup">
            <label for="Qualification">Qualification</label>

<select id="Qualification" class="form-control">
<option value="1 - BE">1 - Sql</option>

</select>

</div>


<div class="formgroup">
            <label for="Department">Department</label>

<select id="Department" class="form-control">
<option value="1 - IT">1 - IT</option>

</select>

</div>
<br />
<br />
<div class="formgroup">
                <button type='submit' class="btn btn-primary"  > Submit </button>
            </div>
            </form>


            </div>
    </div>
  )
}
