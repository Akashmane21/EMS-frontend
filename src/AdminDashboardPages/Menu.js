import React from 'react'
import './styles.css'
export default function Menu() {
  return (
    <div>
        <div className="all">
            <img src="https://static.vecteezy.com/system/resources/previews/000/379/274/non_2x/user-management-vector-icon.jpg" alt="" />

            <div className="menuitems">
                <a href="/Admin_Dashboard">

            <div className="registertitle">

            <img src="https://thumbs.dreamstime.com/b/dashboard-admin-monitor-monitoring-processing-flat-color-icon-vector-148914658.jpg" alt="" />
            <h6>Dashboard</h6>
                </div>
                </a>

                <div className="registertitle">

            <img src="https://st4.depositphotos.com/27867620/30419/v/450/depositphotos_304191084-stock-illustration-propose-web-icon-simple-design.jpg" alt="" />
            <h6>Employee </h6>
                </div>

                <div className="registertitle">

            <img src="https://static.vecteezy.com/system/resources/previews/000/422/914/original/vector-settings-icon.jpg" alt="" />
            <h6 style={{ paddingRight:20}}>Settings </h6>
                </div>

            </div>
        </div>
    </div>
  )
}
