import React from "react";
import Products from "./Products";

const Home = () => {
    
    return (
        <>
      
        <div className="hero">
             <div className="card bg text-black border-0">
         
                <img src="/imges/img2.jpg" className="hero" alt="home image" height="800px"/>
             
                <div className="card-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2 mb-5">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            
            <Products/> 
            
        </div>
        </>
    );
};
export default Home;