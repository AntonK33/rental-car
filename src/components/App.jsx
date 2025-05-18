import { Routes, Route,   } from "react-router-dom";


import Layout from "./Layout";
import Catalog from "./Catalog/Catalog";










import Home from "./Home/Home";
export default function App() {
 

 

  return (
   
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/catalog" element={<Catalog />} />
       
        </Route>
      </Routes>
   
  );
}