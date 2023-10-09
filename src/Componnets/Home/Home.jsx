import { useLoaderData } from "react-router-dom";
import Bannar from "../Bannar/Bannar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Service from "../Service/Service";
import { useEffect } from "react";
import Testinomials from "../Testinomials/Testinomials";
import Gallary from "../Gallary/Gallary";
import Aos from "aos";
import 'aos/dist/aos.css'



const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const services = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <div data-aos="fade left">
                <Bannar></Bannar>
            </div>
            <h1 className="text-center p-4 text-3xl border-b-4 border-[#008080] font-semibold text-zinc-800">Our services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-right">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <div data-aos="fade-up">
                <h1 className="text-center p-4 text-3xl border-b-4 border-[#008080] font-semibold text-zinc-800 mt-6">What Clients Say !</h1>
                <Testinomials></Testinomials>
            </div>
            <div data-aos="fade-in">
                <h1 className="text-center p-4 text-3xl border-b-4 border-[#008080] font-semibold text-zinc-800 mt-6">Gallary </h1>
                <Gallary></Gallary>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;