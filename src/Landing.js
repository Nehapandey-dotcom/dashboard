import Sidebar from './Sidebar';
import Main from './Main';
import { useParams } from 'react-router-dom';

function Landing(){
    let params=useParams();
    return(
        <>
        {params.user}
            <div className='container'>
                <div className='main'>
                    <Sidebar/>
                    <Main/>
                </div>
            </div>
        </>
    )
}
export default Landing;