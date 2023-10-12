import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation(){
    const location=useLocation();
    useEffect(()=>{
        console.log(location.pathname)
    },[location])
    return(
        <>
        <div className="navigation">
            <ul className="navMenu">
                <li><Link to='/Landing' className={`linkTag ${location.pathname==="/Landing" ? "active" :""}`}><i class="fi fi-rr-dashboard"></i>Dashboard</Link></li>
                <li><Link to='/Landing/transactions' className={`linkTag ${location.pathname==="/Landing/transactions" ? "active" :""}`}><i class="fi fi-rr-receipt"></i>Transactions</Link></li>
                <li><Link to='/Landing/schedules' className={`linkTag ${location.pathname==="/Landing/schedules" ? "active" :""}`}><i class="fi fi-rr-calendar-clock"></i>Schedules</Link></li>
                <li><Link to='/Landing/users' className={`linkTag ${location.pathname==="/Landing/users" ? "active" :""}`}><i class="fi fi-rs-circle-user"></i>Users</Link></li>
                <li><Link to='/Landing/settings' className={`linkTag ${location.pathname==="/Landing/settings" ? "active" :""}`}><i class="fi fi-rr-settings"></i>Settings</Link></li>
            </ul>
        </div>
        </>
    )
}
export default Navigation;