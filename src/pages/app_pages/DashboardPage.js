import chart1 from '../../assets/app_assets/chart1.png';
import chart2 from '../../assets/app_assets/chart2.png';
import chart3 from '../../assets/app_assets/chart3.png';
import chart4 from '../../assets/app_assets/chart4.png';

const DashboardPage = () => {
    return (
        <div className="dashboard_page_container">
            <div className="dashboard_page_sub_container">
                <h1 className="title">FAB Games Dashboard</h1>
            </div>
            <div className="dashboard_page_content_container">
                <img src={chart1} alt="chart1"/>
                <img src={chart2} alt="chart2"/>
                <img src={chart3} alt="chart3"/>
                <img src={chart4} alt="chart4"/>
            </div>
        </div>
    )
}

export default DashboardPage
