import '../../styles/service.css';
// import { IService, services } from '../date/serviceDate';
import { useContext, useEffect, useState } from 'react';
import { twkContext } from '../../Utils/TwkContext';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import axios from 'axios';

// const { bookFaliah } = useContext(twkContext)


// interface ServiceProps {
//     service: IService;
// }


export default function ServicesComponant() {
    const { Service, users, serviceSearch, ServiceFilter } = useContext(twkContext)
    let userInfo = JSON.parse(localStorage.getItem("userInfo") || "")
    let userFound = users?.find((u: any) => u.user_id == userInfo.userId)
    let serviceTitle = userFound?.services.map((s: any) => s.service_title)
    const healthService = Service.filter((s: any) => s.service_type == "Health_service")
    const publicService = Service.filter((p: any) => p.service_type == "Public_service")
    const educationService = Service.filter((e: any) => e.service_type == "Education_service")
    const faaliat = Service.filter((e: any) => e.service_type == "faaliat")


    const bookFaliah = async (service: any) => {
        let userInfo = JSON.parse(localStorage.getItem("userInfo") || "")
        let userFound = users?.find((u: any) => u.user_id == userInfo.userId)
        let userServices = userFound.services
        const serviceBody = {
            service_type: service.service_type,
            service_title: service.service_title,
            aftar: service.aftar
        }
        userServices.push(serviceBody)
        let body = {
            user_id: userFound.user_id,
            email: userFound.email,
            name: userFound.name,
            age: userFound.age,
            role: userFound.role,
            nationalId: userFound.nationalId,
            date_birth: userFound.date_birth,
            phoneNumber: userFound.phoneNumber,
            place_birth: userFound.place_birth,
            nationality: userFound.nationality,
            password: userFound.password,
            blood_type: userFound.blood_type,
            marital_status: userFound.marital_status,
            gender: userFound.gender,
            services: userServices,
            datapanel: userFound.datapanel,
            photo: userFound.photo
        }

        console.log(body);

        await axios.put("http://localhost:3002/users/", body)
    }


    return (
        <>
            <div className='contain-contain-services'>
                <div>
                    <form className='form-search-service' onSubmit={serviceSearch}>
                        <div>
                            <input className="search-ser" type="search" name="search" placeholder="Search..." />
                            <button className="btn-service-search">
                                Search
                            </button>
                        </div>
                    </form>


                    <div>


                        <div className='search-inservice'>
                            <h1 className='text-h3'>Public service</h1>

                        </div>
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
                    <div>

                        <h1 className='text-h3'>Faaliat services</h1>
                        <div className='container-service-card'>
                            {faaliat.map((Service: any) => (
                                <div className='content-sub-box-servic'>
                                    <div>
                                        <img className='aftar-services-box' src={Service.aftar} alt="" />
                                    </div>
                                    {Service.service_title == "Tathkerah bolivard" ? (<div className='content-eduction-box'>
                                        <Popup trigger={<h3> {Service.service_title}</h3>} position="right center">
                                            <div className='popup-falliat'>
                                                <h3>{Service.service_title}</h3>
                                                <p>{Service.descryption}</p>

                                                {serviceTitle.includes(Service.service_title) ?
                                                    (<button className='btn-pupup'>You Already Booked !</button>) :
                                                    (<button onClick={() => bookFaliah(Service)} className='btn-pupup'>Book now!</button>)}
                                            </div>
                                        </Popup>

                                    </div>) : <Popup trigger={<h3> {Service.service_title}</h3>} position="right center">
                                            <div className='popup-falliat'>
                                                <h3 className='h3-serr'>{Service.service_title}</h3>
                                                <p>{Service.descryption}</p>

                                                {serviceTitle.includes(Service.service_title) ?
                                                    (<button className='btn-pupup'>You Already Booked !</button>) :
                                                    (<button onClick={() => bookFaliah(Service)} className='btn-pupup'>Book now!</button>)}
                                            </div>
                                        </Popup>}

                                    <div>
                                        {Service.descryption}
                                    </div>


                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </>




    )
}

