import DashboardHeader from '../../component/header/dashbaordHeader'
import DashbaordSidebar from '../../component/header/dashboardSidebar'
import SettingSection from '../../component/section/food-setting'
import '../../component/styles/dashboard-styles/styles.css'

export default function SettingPage() {

    return (

        <>

            <DashboardHeader />

            <div className='container-fluid'>

                <div className='row'>

                    <DashbaordSidebar
                        nav_item_color1="black"
                        nav_item_color2="black"
                        nav_item_color3="black"
                        nav_item_color4="black"
                        nav_item_color5="black"
                        nav_item_color6="#F8B602"
                        nav_item_color7="black"
                        nav_item_color8="black"
                        nav_item_color9="black"
                        nav_item_color10="black"
                        nav_item_color11="black"
                        nav_item_color12="black"
                        nav_item_color13="black"
                        nav_item_color14="black"

                    />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ backgroundColor: "#F2F4F7" }}>

                        <SettingSection />

                    </main>

                </div>

            </div>

        </>

    )

}