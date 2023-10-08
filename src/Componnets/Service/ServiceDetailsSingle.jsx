import { Link } from "react-router-dom";



const ServiceDetailsSingle = ({ sd }) => {
    const { id, name, image, details, registration_fee, date, speaker, s_details, location } = sd
    return (

        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} width={350} height={200} alt="Album" /></figure>
            <div className="card-body">

                <h2 className="text-[#008080] font-extrabold text-4xl m-4 text-center">{name}</h2>
                <div className=" md:flex lg:flex gap-2">

                    <div className="rounded-3xl  p-4">
                        <h2 className="text-center font-medium text-xl border-b-2 mb-2 p-2 text-teal-700">About Events</h2>

                        <h2 className="my-2"><span className="font-medium text-xl ">Agenda :</span> <span className="text-slate-600 text-lg ">{details}</span></h2>
                        <h2 className="my-2"><span className="font-medium text-xl">Registration Fee :</span> <span className="text-slate-600 text-lg">{registration_fee} BDT</span></h2>
                        <h2 className="my-2"><span className="font-medium text-xl">Date :</span> <span className="text-slate-600 text-lg">{date}</span></h2>
                        <h2 className="my-2"><span className="font-medium text-xl">Loaction :</span> <span className="text-slate-600 text-lg">{location}</span></h2>



                    </div>
                    <div className="rounded-3xl  p-4">
                        <h2 className="text-center font-medium text-xl border-b-2 mb-2 p-2 text-teal-700">About Speakar</h2>
                        <h2 className="my-2"><span className="font-medium text-xl ">Speaker :</span> <span className="text-slate-600 text-lg ">{speaker}</span></h2>
                        <h2 className="my-2"><span className="font-medium text-xl "></span> <span className="text-slate-600 text-lg ">{s_details}</span></h2>


                    </div>
                </div>


                <p  className="text-[#008080] m-4 text-center text-2xl">Done Reading ? <Link className="btn" to="/">Home</Link></p>

            </div >
           
        </div >
    );
};

export default ServiceDetailsSingle;