import React from 'react'
import BredNav from './BredNav'
import Menu from './Menu'

export default function Admin_Dashboard() {
  return (
    <div>
                  <Menu />
           

            <div className="rightbody" >
                <BredNav name="Admin Dashboard" />
                <h1>Admin Dashboard</h1>
                <div className="dash_blocks">
                    <a href="/Manage_emp">

                    <div className="dash_card">
                        <img src="https://st4.depositphotos.com/27867620/30419/v/450/depositphotos_304191084-stock-illustration-propose-web-icon-simple-design.jpg" alt="" />
                        <h5>Manage Employees</h5>
                    </div>
                    </a>
                    <a href="/Admin_Qualification">
                    <div className="dash_card">
                        <img src="https://cdn4.iconfinder.com/data/icons/miscellaneous-19-color-shadow/128/education_eligibility_fresher_freshman_man_person_qualification-1024.png" alt="" />
                        <h5>Qualification</h5>
                    </div>
                    </a>
                    <a href="/Admin_Skills">
                    <div className="dash_card">
                        <img src="https://cdn4.iconfinder.com/data/icons/financial-symbols-1/256/finance_manager-512.png" alt="" />
                        <h5>Skills</h5>
                    </div>
                    </a>
                    <a href="/Admin_Departments">
                    {/* <div className="dash_card">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/775/421/large_2x/account-settings-configuration-icon-vector.jpg" alt="" />
                        <h5>Account Settings</h5>
                    </div> */}

                    <div className="dash_card">
                        <img src="https://cdn4.iconfinder.com/data/icons/business-and-office-7-1/64/393-512.png" alt="" />
                        <h5>Department </h5>
                    </div>
                    </a>
                    <a href="/Admin_Roles">
                    <div className="dash_card">
                        <img src="https://clipground.com/images/roles-clipart-3.jpg" alt="" />
                        <h5>Role</h5>
                    </div>
                    </a>
                    <a href="/Generate_payslip">
                    <div className="dash_card">
                        <img src="https://media.istockphoto.com/vectors/tax-payment-government-state-taxes-payment-day-tax-form-financial-vector-id1029884578?k=20&m=1029884578&s=612x612&w=0&h=UXJAt9LeCY8SKBh4whk4mcwdQEpC9vgrKLm77Q3kx_s=" alt="" />
                        <h5>Generate Payslip</h5>
                    </div>
                    </a>
                </div>
            </div>
      

    </div>
  )
}
