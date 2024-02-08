import React from "react";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Products from "../components/Products";
import Homepagesdress from "../Clothsinfo/Homepagesdresses/Homepagesdress"
import Bestsellers from "../components/Bestsellers";
import Footer from "../components/Footer";
import "../index.css";

export default function Homepage(){
    const productobj=Homepagesdress.map(Data => {
            return(
                 <Products 
                 {...Data}
                 />
                
            )
        }
    )
    return(
        <div>
         <Header />
         <Slideshow />
         <div className="heads" >New Arrivals</div>
         <div class="products">
         {productobj}
         </div>
         <div className="heads">Best Sellers</div>
         <Bestsellers />
         <Footer />
      
</div>    )
}