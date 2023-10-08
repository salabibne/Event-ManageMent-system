import Navbar from "../Navbar/Navbar";


const Achivements = () => {
    return (
        <div>
            <Navbar></Navbar>
        
            <h2 className="text-center text-4xl font-medium text-teal-700 mb-4"> Our Achivements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-200 p-6 rounded-md gap-4">
            <div className="card card-compact w-full  bg-red-100 shadow-xl">
                
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#008080] font-extrabold">1000 +</h2>
                    <p className="text-gray-600 font-serif text-xl">"Events coverd"</p>
                   
                </div>
            </div>
            <div className="card card-compact w-full bg-lime-100 shadow-xl">
                
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#008080] font-extrabold">700 +</h2>
                    <p className="text-gray-600 font-serif text-xl">"Pathnerships"</p>
                    
                </div>
            </div>
            <div className="card card-compact w-full bg-orange-100 shadow-xl">
                
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#008080] font-extrabold">390 +</h2>
                    <p className="text-gray-600 font-serif text-xl">" Award"</p>
                   
                </div>
            </div>
        </div>

            

         
        </div>
    );
};

export default Achivements;