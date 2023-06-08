import { useContext, useEffect } from "react"
import Sidebar from "./partials/sidebar"
import Topbar from "./partials/topbar"
import { UserContext } from "../contexts/userContext"
import { checkLogStatus } from "../api/axios"
import { useNavigate } from "react-router-dom"


const DashboardLayout = () => {
    const{user,setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const checkUserStatus = async () => {
        const isConnected = await checkLogStatus()

        if(!isConnected)
        {
            navigate("/")
        }

       /*  if(isConnected)
        {
            setLoading(false);
        } */
    }

    useEffect(() => {
        checkUserStatus()
    },[])
    return (
        <div id="wrapper">
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar/>
                    <div>
                        
                    </div>

                </div>

            </div>

        </div>
    )
}

export default DashboardLayout