import '../../styles/service.css';
// import { IService, services } from '../date/serviceDate';
import { useContext, useEffect, useState } from 'react';
import { twkContext } from '../../Utils/TwkContext';
import { Link } from 'react-router-dom';




// interface ServiceProps {
//     service: IService;
// }


export default function ServicesComponant() {
    const { Service } = useContext(twkContext)
    const healthService = Service.filter((s: any) => s.service_type == "Health_service")
    const publicService = Service.filter((p: any) => p.service_type == "Public_service")
    const educationService = Service.filter((e: any) => e.service_type == "Education_service")

    return (
        <>
            <div className='contain-contain-services'>
                <div>

                    <h1 className='text-h3'>Public service</h1>
                    <div className='container-service-card'>
                        {publicService.map((Service: any) => (
                            <div className='content-sub-box-servic'>
                                <div>
                                    <img className='aftar-services-box' src={Service.aftar} alt="" />
                                </div>
                                {Service.service_title == "digital wallet" ?
                                    (<Link style={{ textDecoration: 'none', color: "black" }} to={"/digitalwallet"}><div className='content-eduction-box nav-link'>
                                        <h3> {Service.service_title}</h3>
                                    </div></Link>) : <div className='content-eduction-box'>
                                        <h3> {Service.service_title}</h3>
                                    </div>}

                                <div>
                                    {Service.descryption}
                                </div>
                                {/* {Service.service_title == "Umrah Permits" ? */}
                                {/* <a href="https://www.haj.gov.sa/ar/InternalPages/Umrah"> <h3> {Service.service_title}</h3>
                        </a> */}
                                {Service.service_title == "Umrah Permits" ? (<a href='https://www.haj.gov.sa/ar/InternalPages/Umrah'>{Service.service_title}</a>) : 'not'}


                            </div>
                        ))}
                    </div>
                </div>

                <div>

                    <h1 className='text-h3'>Health services</h1>
                    <div className='container-service-card'>
                        {healthService.map((Service: any) => (
                            <div className='content-sub-box-servic'>
                                <div>
                                    <img className='aftar-services-box' src={Service.aftar} alt="" />
                                </div>
                                <div className='content-eduction-box'>
                                    <h3> {Service.service_title}</h3>
                                </div>
                                <div>
                                    {Service.descryption}
                                </div>

                                {/* <div>
                            {Service.service_type}
                        </div> */}
                                {/* <div>
                            {Service.featured_service}
                        </div> */}

                            </div>
                        ))}
                    </div>
                </div>

                <div>

                    <h1 className='text-h3'>Education services</h1>
                    <div className='container-service-card'>
                        {educationService.map((Service: any) => (
                            <div className='content-sub-box-servic'>
                                <div>
                                    <img className='aftar-services-box' src={Service.aftar} alt="" />
                                </div>
                                <div className='content-eduction-box'>
                                    <h3> {Service.service_title}</h3>
                                </div>
                                <div>
                                    {Service.descryption}
                                </div>

                                {/* <div>
                            {Service.service_type}
                        </div> */}
                                {/* <div>
                            {Service.featured_service}
                        </div> */}

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>




    )
}

