import {Route, Routes} from 'react-router-dom'
import './App.css';
import FilterPage from './FilterPage';
import OrbitPage from './OrbitPage';
import Navbar from './Navbar';

function App() {

  return (
   <>
    <Navbar />

    <Routes>
      <Route path='/' element={<OrbitPage/>} />
      <Route path='/filter' element={<FilterPage/>}/>
    </Routes>
   </> 
  )
}

export default App;
