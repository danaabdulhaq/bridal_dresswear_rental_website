import React from "react"
import { Link } from "react-router-dom"


const SideBar=()=>{

const handelClick=()=>{
    localStorage.setItem('login',false)

}


return(
    <div className="sidBar">
    <li>
        <Link className="nav-link" to='/Login/Dress'>Dress</Link>
    </li>
    <li>
        <Link className="nav-link" to='/Login/Accessoriess'>Accessories</Link>
    </li>
    <li>
        <Link className="nav-link" to='/Login/Bouquet'>Bouquet</Link>
    </li>
    <li>
        Massages
    </li>
    <li>
    <Link className="nav-link" to='/'> Logout</Link>
        
    </li>
    </div>
)


}
export default SideBar