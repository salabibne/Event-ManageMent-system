import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const { id, name, image, details,registration_fee,date,speaker,s_details} = service
    return (
        <div className="card card-compact w-full bg-[#caf3f6b8] mt-6  h-full">
        
            <figure><img className="p-4" src={image} width={300} height={300} /></figure>
            <div className="card-body">
                <h2 className=" font-extrabold font-serif text-2xl ">{name}</h2>
                
                <h2 className="text-lg  text-slate-950 font-semibold">Date : {date}</h2>
                <p className="text-lg text-violet-900 font-bold">Speaker : {speaker} </p>
                
                <div className="card-actions justify-center">
                   
                     <Link to ={`/details/${id}`}><button className="p-4 rounded-md bg-[#008080] text-gray-200 w-full font-bold text-lg ">Know More</button></Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Service;