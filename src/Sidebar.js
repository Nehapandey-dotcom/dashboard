import Navigation from "./Navigation";
import { useState } from "react";
function Sidebar({isActive}){
    const style=isActive;
    
    return(
        <>
        
        <div className={`sidebar ${style===true ? 'active' : 'inactive'}`}>
            <div className="sidebarMenu">
                <h1 className="mainHeading">Board.</h1>
                <Navigation/>
                <div className="bottomMenu">
                    <a href="/#/Landing">Help</a>
                    <a href="/#/Landing">Contact Us</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Sidebar;