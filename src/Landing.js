import Sidebar from './Sidebar';
import Main from './Main';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { useState } from 'react';
function Landing(){
    const [isActive,setIsActive]=useState(false)
    const closeSidebar=()=>{
        setIsActive(!isActive)
    }
    return(
        <>
            <div className='container'>
                <div className='main'>
                    <Sidebar isActive={isActive}/>
                    <div className={`rightSection ${isActive===true ? 'btnActive' : 'btnInActive'}`}>
                        <Header onClick={closeSidebar}/>
                        <Main/>
                    </div>    
                </div>
            </div>
        </>
    )
}
export default Landing;