// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/Main';
import Home from './pages/Home';
import Veiculos from './pages/Veiculos';
import Page404 from './pages/Page404';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/veiculos/lancha' element={<Veiculos tipo="lancha"/>}/>
          <Route path='/veiculos/utv' element={<Veiculos tipo="utv"/>}/>
          <Route path='/veiculos/moto-aquatica' element={<Veiculos tipo="motoAquatica"/>}/>
          <Route path='/veiculos/quadriciculo' element={<Veiculos tipo="quadriciculo"/>}/>
        </Route>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
