import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Dashboard from './Landing/Dashboard';
import Transactions from './Landing/Transactions';
import Schedules from './Landing/Schedules';
import Users from './Landing/Users';
import Settings from './Landing/Settings';
function Main() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/Schedules" element={<Schedules />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
        </>
    )
}
export default Main;