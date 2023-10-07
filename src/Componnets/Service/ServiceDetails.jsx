import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import ServiceDetailsSingle from "./ServiceDetailsSingle";


const ServiceDetails = () => {
    const {id} =useParams()
    const [details,setDetails]=useState([])
    console.log("id",id)
    useEffect(()=>{
        const array= []
        const ids =id;
        fetch('/service.json')
        .then(res =>res.json())
        .then(data =>{
            const abc =data.find(dt => dt.id==ids);
            array.push(abc)
            console.log(abc)
            console.log(array)
            setDetails(array)
          
           
            
        })
    },[id])
    return (
        <div className="p-6">
            {
                details.map(sd => <ServiceDetailsSingle sd={sd}></ServiceDetailsSingle>)
            }
        </div>
    );
};

export default ServiceDetails;