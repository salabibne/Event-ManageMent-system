

const Gallary = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-200 p-6 rounded-md">
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img width={400} className="rounded-full" src="/images-educationalEvents/g1.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
               
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img width={400}  src="/images-educationalEvents/g2.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
               
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img width={400} src="/images-educationalEvents/g3.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
               
            </div>
        </div>
    );
};

export default Gallary;