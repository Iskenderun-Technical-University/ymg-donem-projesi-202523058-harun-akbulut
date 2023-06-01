import './styles/App.css';
import React ,{Component}from 'react';
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import Company1 from './pages/company';
import Navbar from './components/navbar';
import Footer from './components/footer';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import HomePage from './pages/HomePage';
import OurServices from './pages/ourServices';
import Products from './pages/Product';
import Industies from './components/Industies';
import DataSm from './pages/dataSM';
import CognnitiveA from './pages/CognitiveA';
import CloudDigital from './pages/cloudDigital';
import ChangeManagment from './pages/changeManagment';
import FMCG360 from './pages/fmcg';
import YapimAsamasi from './pages/hazirlananSayfa';
import Manufacturing from './pages/Manufacturing.js';
import LoadOptimizer from './pages/LoadOptimizer.js';



//test commit 1
function App() {
 
  return (
    <div className='mainDiv'>
<Router>
      <header className='container' style={{background: '#FFFFFFB2' /*#FFFFFFB2 */ , width:'100%',position:'fixed'}}>
       <Navbar/>
      </header>
    <main>
     <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/company' element={<Company1/>}/>
          <Route path='/ourservices' element={<OurServices/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/industies' element={<Industies/>}/>
          <Route path='/DataSM' element={<DataSm/>}/>
          <Route path='/cognnitiveA' element={<CognnitiveA/>}/>
          <Route path='/cloudDigital' element={<CloudDigital/>}/>
          <Route path='/changemanagment' element={<ChangeManagment/>}/>
          <Route path='/fmcg360' element={<FMCG360/>}/>
          <Route path='/empty' element={<YapimAsamasi/>}/>
          <Route path='/Manufacturing' element={<Manufacturing/>}/>
          <Route path='/LoadOptimizer' element={<LoadOptimizer/>}/>
        </Routes> 
    </main> 
</Router>
      <Footer/>
    </div >

  );
}

export default App;
