import React , { useState , useEffect} from 'react'

export default function Navbar() {
    const [userdata, setuserdata] = useState([])
    const [auth, setAuth] = useState(false)
    const [isAdmin, setisAdmin] = useState(false)

    useEffect(() => {
     if(localStorage.getItem("Auth")!=null){
        const userdata = JSON.parse(localStorage.getItem("Userinfo"))
        setAuth(true)
        setuserdata(userdata)
        if(userdata.type=="Admin"){
            setisAdmin(true)
        }
     }
    }, [])

    function Logout(){
        localStorage.removeItem("Auth")
        localStorage.removeItem("Userinfo")
        window.location.replace("/")
    }
    
    
  return (
    <div> 
        <header>
    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div class="container-fluid">
            <a class="navbar-brand" href='/Allmovies' style={{color:'#007fff'}}>SHOWS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse d-flex j" style={{display:"flex" , justifyContent:"space-between"}}>
                <ul class="navbar-nav flex-grow-1">
                    <li class="nav-item">
                        <a class="nav-link " href='/Allmovies'>Home</a>
                    </li>
                    {isAdmin && 
                    
                    <li class="nav-item">
                        <a class="nav-link " href='/Admin'>Admin Panel</a>
                    </li>
                    }
                  
                    <li class="nav-item">
                        <a class="nav-link " href='/About'>About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href='/Contact'>Contact</a>
                    </li>
                </ul>
                    <div>
                        <ul className='navbar-nav flex-grow-1'>


                    {auth ? ( 
                        <>
                         <li class="nav-item">
                        <a class="nav-link" style={{ color:"blue"}} >{userdata.username}</a>
                    </li> 
                    <li class="nav-item">
                        <a class="nav-link " style={{ color:"red"}} onClick={Logout} >Logout</a>
                    </li>
                        </>
                    ) : (
                        <>
                        <li class="nav-item">
                        <a class="nav-link " href='/Login'>Login</a>
                    </li> <li class="nav-item">
                        <a class="nav-link " href='/UserRegister'>Register</a>
                    </li>
                        </>
                    )}


                    
                        </ul>
                    </div>
                   
            </div>
        </div>
    </nav>
</header>

</div>
  )
}
