import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h2 className="text-red-700 text-center font-bold">An Error has been triggered</h2>
            <span><Link to ="/"><button>Go back Home</button></Link></span>
        </div>
    );
};

export default Error;