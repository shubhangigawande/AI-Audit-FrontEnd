
import '@fortawesome/fontawesome-free/css/all.min.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ClickWallet } from './components/ClickWallet';
import { HomePage } from './components';
import { SearchClick } from './components/SearchClick';
import { MyDashboard } from './components/MyDashboard';
import { ClickAuditTable } from './components/ClickAuditTable';

function App() {
  return (

    
    <Router>
      <Routes>
     
      <Route path='/' element={<HomePage />} />
      <Route path='/ClickWallet' element={<ClickWallet />} />
      <Route path='/SearchClick' element={<SearchClick />} />
      <Route path='/MyDashboard' element={<MyDashboard />} />
      <Route path='/ClickAuditTable' element={<ClickAuditTable />} />

      
      </Routes>

    
     
    </Router>

    
  );
}

export default App;
