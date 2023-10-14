 import UpperCard from "../UpperCard";
import Activities from "../Activities";
import BottomCard from "../BottomCard";
import { useState } from "react";
function Dashboard(){
    
    return(
        <>
        <div>
            <UpperCard/>
            <Activities/>
            <BottomCard/>
        </div>
        </>
    )
}
export default Dashboard;