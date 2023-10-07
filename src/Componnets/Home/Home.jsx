import { useLoaderData } from "react-router-dom";
import Bannar from "../Bannar/Bannar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Service from "../Service/Service";
import { useEffect } from "react";


const Home = () => {

const services =useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Bannar></Bannar>
            <h1 className="text-center p-4 text-3xl border-b-4 border-[#008080] font-semibold text-zinc-800">Our services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
      
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;