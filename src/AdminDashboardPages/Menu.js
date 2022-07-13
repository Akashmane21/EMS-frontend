import React , {useEffect , useState} from 'react'
import './styles.css'

export default function Menu() {
    const [namee, setnamee] = useState("")
    useEffect(() => {
        if(localStorage.getItem("Auth")!=null){
           const userdata = JSON.parse(localStorage.getItem("Userinfo"))
           setnamee(userdata.admin_Name)
        }

        else{
           window.location.replace("/")
        }
       }, [])
   
       function Logout(){
           localStorage.removeItem("Auth")
           localStorage.removeItem("Userinfo")
           window.location.replace("/")
       }


  return (
    <div>
        <div className="all">
            <img src="https://static.vecteezy.com/system/resources/previews/000/379/274/non_2x/user-management-vector-icon.jpg" alt="" />
            <center>
                <h5 style={{color:"white" , marginTop:20}}>
                    {namee}
                </h5>
            </center>
            <div className="menuitems">
                <a href="/Admin_Dashboard">

            <div className="registertitle">

            <img src="https://thumbs.dreamstime.com/b/dashboard-admin-monitor-monitoring-processing-flat-color-icon-vector-148914658.jpg" alt="" />
            <h6>Dashboard</h6>
                </div>
                </a>

                {/* <div className="registertitle">

            <img src="https://st4.depositphotos.com/27867620/30419/v/450/depositphotos_304191084-stock-illustration-propose-web-icon-simple-design.jpg" alt="" />
            <h6>Employee </h6>
                </div> */}

                <div className="registertitle" onClick={Logout}>

            <img src="https://st2.depositphotos.com/4103319/6625/i/600/depositphotos_66251761-stock-photo-logout-circular-icon-on-white.jpg" alt="" />
            <h6 style={{ paddingRight:20}} >Logout </h6>
                </div>

            </div>
        </div>
    </div>
  )
}
