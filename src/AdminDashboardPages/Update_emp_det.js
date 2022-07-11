import React from 'react'
import Menu from './Menu'

export default function Update_emp_det() {
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >
            <h1>Update Employee Details - Admin</h1>
            <form action="" >
            <div class="formgroup">
            <input type="text" placeholder='Search Employee Details' className='form-control' />

                </div>


                <div class="formgroup">
            <input type="text" placeholder='Search by Name' className='form-control' />

                </div>

                <div class="formgroup">
            <input type="text" placeholder='Search by Phone no.' className='form-control' />

                </div>


                </form>


                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>1033</td>
      <td>abc</td>
      <td>abc</td>
      <td>Edit | Delate | View details</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>3221</td>

      <td>Jacob</td>
      <td>Thornton</td>
      <td>Edit | Delate | View details</td>
      

    </tr>
   
  </tbody>
</table>
          


            </div>
    </div>
  )
}
