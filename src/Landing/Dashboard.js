 import UpperCard from "../UpperCard";
import Activities from "../Activities";
import BottomCard from "../BottomCard";
function Dashboard(){
    return(
        <>
        
        <div className="mainContent">
            <div className="DashboardHeader">
                <h2 className="dashboardHeading">Dashboard</h2>
                <div className="profile">
                    <div className="search">
                        <input type="search" value="Search..."/><i class="fi fi-rr-search"></i>
                    </div>
                    <div className="notiicationIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
                        <path d="M16.3861 12.6564V8.91122C16.3861 5.55139 14.2011 2.72107 11.2411 1.86988C10.9481 1.09912 10.2321 0.55603 9.38611 0.55603C8.54011 0.55603 7.82411 1.09912 7.53111 1.86988C4.57111 2.72211 2.38611 5.55139 2.38611 8.91122V12.6564L0.679109 14.4392C0.586067 14.536 0.512279 14.6511 0.461994 14.7778C0.411709 14.9046 0.385919 15.0404 0.386109 15.1776V17.2664C0.386109 17.5434 0.491466 17.809 0.679003 18.0049C0.866539 18.2008 1.12089 18.3108 1.38611 18.3108H17.3861C17.6513 18.3108 17.9057 18.2008 18.0932 18.0049C18.2808 17.809 18.3861 17.5434 18.3861 17.2664V15.1776C18.3863 15.0404 18.3605 14.9046 18.3102 14.7778C18.2599 14.6511 18.1862 14.536 18.0931 14.4392L16.3861 12.6564ZM16.3861 16.222H2.38611V15.61L4.09311 13.8272C4.18615 13.7304 4.25994 13.6153 4.31023 13.4886C4.36051 13.3618 4.3863 13.226 4.38611 13.0888V8.91122C4.38611 6.03181 6.62911 3.68923 9.38611 3.68923C12.1431 3.68923 14.3861 6.03181 14.3861 8.91122V13.0888C14.3861 13.3666 14.4911 13.6319 14.6791 13.8272L16.3861 15.61V16.222ZM9.38611 21.444C10.0054 21.4448 10.6096 21.2441 11.1146 20.8697C11.6196 20.4954 12.0004 19.966 12.2041 19.3552H6.56811C6.77177 19.966 7.15259 20.4954 7.65762 20.8697C8.16265 21.2441 8.76681 21.4448 9.38611 21.444Z" fill="black"/>
                    </svg>
                    </div>
                    <div className="userProfile">
                        <a href="" className="profileimg"><img src="userimg.png"/></a>
                    </div>
                </div>
            </div>
            <UpperCard/>
            <Activities/>
            <BottomCard/>
        </div>
        </>
    )
}
export default Dashboard;