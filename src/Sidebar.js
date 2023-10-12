import Navigation from "./Navigation";
function Sidebar(){
    return(
        <>
        <div className="sidebar">
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