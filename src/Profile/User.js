import DashboardHeader from '../../component/header/dashbaordHeader'
import DashbaordSidebar from '../../component/header/dashboardSidebar'
import ProfileSection from '../../component/section/profileSection'
import '../../component/styles/dashboard-styles/styles.css'
import UserOld from '../../Profile/userOld';

export default function ProfilePage() {

    return (

        <>

            <DashboardHeader />

            <div className='container-fluid'>

                <div className='row'>

                    <DashbaordSidebar

                    />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ backgroundColor: "#F2F4F7" }}>

                        <UserOld />
                     
                      
                
                            

                    </main>

                </div>

            </div>

        </>

    )

}