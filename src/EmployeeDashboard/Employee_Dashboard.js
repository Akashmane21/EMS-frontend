import React from 'react'
import Menu from './Menu'

export default function Employee_Dashboard() {
  return (
    <div>
                  <Menu />
           

            <div className="rightbody" >
                <h1>Employee Dashboard</h1>
                <div className="dash_blocks">
                 

                    <div className="dash_card">
                        <img src="https://cdn4.iconfinder.com/data/icons/miscellaneous-19-color-shadow/128/education_eligibility_fresher_freshman_man_person_qualification-1024.png" alt="" />
                        <h5>Qualification</h5>
                    </div>

                    <div className="dash_card">
                        <img src="https://cdn4.iconfinder.com/data/icons/financial-symbols-1/256/finance_manager-512.png" alt="" />
                        <h5>Skills</h5>
                    </div>

                    <div className="dash_card">
                        <img src="https://webstockreview.net/images/family-icon-png-5.png" alt="" />
                        <h5>Dependents</h5>
                    </div>

                   



                    <div className="dash_card">
                        <img src="https://media.istockphoto.com/vectors/tax-payment-government-state-taxes-payment-day-tax-form-financial-vector-id1029884578?k=20&m=1029884578&s=612x612&w=0&h=UXJAt9LeCY8SKBh4whk4mcwdQEpC9vgrKLm77Q3kx_s=" alt="" />
                        <h5>Generate Payslip</h5>
                    </div>

                    <div className="dash_card">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/775/421/large_2x/account-settings-configuration-icon-vector.jpg" alt="" />
                        <h5>Account Settings</h5>
                    </div>

                    
                </div>
            </div>
      

    </div>
  )
}
