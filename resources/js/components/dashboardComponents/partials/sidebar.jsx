import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { appName } from "../../shared/constancy"

const Sidebar = () => {
    const {user,setUser} = useContext(UserContext)

    const userRoutes = [

    ]

   

    return(
<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
     {/* Sidebar - Brand  */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">{appName}</div>
    </a>

     {/* Divider  */}
    <hr className="sidebar-divider"/>

     {/* Heading  */}
    <div className="sidebar-heading">
        Orders
    </div>

    <li className="nav-item active">
        <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>place new order</span></a>
    </li>

     {/* Nav Item - Pages Collapse Menu  */}


     {/* Divider  */}
    <hr className="sidebar-divider"/>

</ul>
    )
}

export default Sidebar