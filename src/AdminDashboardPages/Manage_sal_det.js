import React from 'react'
import Menu from './Menu'

export default function Manage_sal_det() {
  return (
    <div>
      
                  <Menu />
            <div className="rightbody" >
            <h1>Manage Salary Details - Admin</h1>

          

            <form action="" >
            <div class="formgroup">
                <label htmlFor="Basic pay">Basic pay</label>
                <input  required id="Fname" type="number" class="form-control" />
                </div>

                <div class="formgroup">
                <label for="HRA" class="control-label">HRA</label>
                <input required id="Mname" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Provident Fund" class="control-label">Provident Fund</label>
                <input required id="Lname" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Conveyance Allowances" class="control-label">Conveyance Allowances</label>
                <input required id="Lname" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Special Allowance" class="control-label">Special Allowance</label>
                <input required id="Lname" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="TDS" class="control-label">TDS</label>
                <input required id="Lname" type="number" class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Gross Salary" class="control-label">Gross Salary</label>
                <input required id="Lname" type="number"  class="form-control" />
            </div>

            <div class="formgroup">
                <label for="Net Salary" class="control-label">Net Salary</label>
                <input required id="Lname" type="number" class="form-control" />
            </div>

                <div class="formgroup">
    
                </div>   

<div class="formgroup">
                <button type='submit' class="btn btn-primary"  > Submit </button>
            </div>
            </form>


            </div>
    </div>
  )
}
