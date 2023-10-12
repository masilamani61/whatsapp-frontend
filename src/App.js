import {BrowserRouter as Router,Route, Routes,Navigate} from 'react-router-dom'
import Loginpage from './authpages/loginpage'
import Registerpage from './authpages/Registerpage'
import Dashboardpage from './dashboard/dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertNotifaction from './shared/alertnotification';
function App(){
  return (<>
    <Router>
        <Routes>
          <Route path='/login' element={<Loginpage/>}>
            </Route>
          <Route path='/register' element={<Registerpage/>}/>
          <Route path='/dashboard' element={<Dashboardpage/>}/>
        <Route path='/' element={<Navigate to='/dashboard'/>}/>
        </Routes>
        
      
    </Router>
    <AlertNotifaction/>
  </>)
}
export default App