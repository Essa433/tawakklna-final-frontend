import '../../styles/service.css';
// import { IService, services } from '../date/serviceDate';
import { useContext, useEffect, useState } from 'react';
import { twkContext } from '../../Utils/TwkContext';




// interface ServiceProps {
//     service: IService;
// }


export default function ServicesComponant() {
    const { Service } = useContext(twkContext)


    // const [service, setService] = useState([])


    // const getService = async () => {
    //     const response = await axios.get("http://localhost:3002/service/services")
    //     setService(response.data)
    //     // console.log(Service);
    // }

    // useEffect(() => {
    //     getService()
    // }, [])



    return (
        <>
            <h1>Services Page</h1>
            <div className='container-service-card'>
                {Service.map((Service: any) => (

                    <div className='content-sub-box-servic'>

                        <div>
                            {Service.aftar}
                        </div>
                        <div className='content-eduction-box'>
                            <h3> {Service.service_title}</h3>
                        </div>
                        <div>
                            {Service.service_type}
                        </div>
                        {/* <div>
                            {Service.featured_service}
                        </div> */}

                    </div>
                ))}
            </div>
        </>




    )
}

