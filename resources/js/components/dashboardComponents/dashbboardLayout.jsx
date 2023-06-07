import Sidebar from "./partials/sidebar"
import Topbar from "./partials/topbar"


const DashboardLayout = () => {
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