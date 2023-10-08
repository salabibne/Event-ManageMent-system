

const Testinomials = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-200 p-6 rounded-md">
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img width={200} className="rounded-full" src="/images-educationalEvents/m1.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#008080] font-extrabold">Saykat</h2>
                    <p className="text-gray-600 font-serif">"Exceeded all expectations! Their expertise in planning our product launch event was evident. Smooth logistics, creative solutions, and a memorable experience for all attendees."</p>
                   
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img width={200}  src="/images-educationalEvents/m2.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#008080] font-extrabold">Sakib</h2>
                    <p className="text-gray-600 font-serif">"Absolutely top-notch event management! From concept to execution, they made our conference a resounding success. Attention to detail, seamless organization, and a team that genuinely cares. Highly recommended!</p>
                    
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img width={200} src="/images-educationalEvents/m3.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#008080] font-extrabold">Ashfak</h2>
                    <p className="text-gray-600 font-serif">"Incredible service! Our corporate gala was flawless, thanks to their meticulous planning and professionalism. They turned our vision into reality, and we couldn't be happier."</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Testinomials;