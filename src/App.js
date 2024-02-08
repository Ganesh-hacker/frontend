import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Women_kurta_catalog_page from "./pages/Womens/Women_kurta_catalog_page";
import Men_Shirts_catalog_page from "./pages/Mens/Men_Shirts_catalog_page";
import Men_Kurtas_catalog_page from "./pages/Mens/Men_Kurtas_catalog_page";
import Men_Pants_catalog_page from "./pages/Mens/Men_Pants_catalog_page";
import Women_tops_catalog_page from "./pages/Womens/Women_tops_catalog_page";
import Women_jeans_catalog_page from "./pages/Womens/Women_jeans_catalog_page";
import Women_lengha_catalog_page from "./pages/Womens/Women_lengha_catalog_page";
import Profile from "./pages/Profile"
import Product from "./pages/Product"
import Addtocart from "./pages/Addtocart";
import Loginpage from "./pages/Loginpage";
import Registerationpage from "./pages/Registerationpage";
export default function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/women/kurta" element={<Women_kurta_catalog_page />} />
          <Route path="/men/shirts" element={<Men_Shirts_catalog_page />} />
          <Route path="/men/kurtas" element={<Men_Kurtas_catalog_page />} />
          <Route path="/men/pants" element={<Men_Pants_catalog_page />} />
          <Route path="/women/tops" element={<Women_tops_catalog_page />} />
          <Route path="/women/jeans" element={<Women_jeans_catalog_page />} />
          <Route path="/women/lengha" element={<Women_lengha_catalog_page />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Product />} />
           <Route path="/cart" element={<Addtocart />} /> 
          <Route path="/login" element={<Loginpage />}/>
          <Route path="/register" element={<Registerationpage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}