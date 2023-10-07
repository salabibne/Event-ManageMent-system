import { Link } from "react-router-dom";


const Bannar = () => {
    return (
        <div className="hero min-h-screen bg-[#BBE8EB] rounded-3xl mt-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/images-educationalEvents/bannar-1.jpg" className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Codesal -A complete Workshop for </h1>
                    
                    <p className="py-4 font-bold text-4xl"> Mastering the <span className="text-violet-900 underline">Codings</span></p>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Bannar;