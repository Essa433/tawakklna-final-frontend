
import '../../styles/service.css';

import { useContext, useEffect, useState } from 'react';
import { twkContext } from '../../Utils/TwkContext';
import { IDataPanel } from '../date/datapanelData';



interface DataPAnelProps {
    datapanel: IDataPanel;
}


export function FeaturedServiceComponant() {
    const { featuredService } = useContext(twkContext)

    return (
        <>
            {/* <h1>featured Service Page</h1> */}
            <div className='container-service-card-featured'>
                {featuredService.map((featuredService: any) => (

                    <div className='content-sub-box-featured-servic'>

                        <div>
                            <img className='aftar-services-box' src={featuredService.aftar} alt="" />
                        </div>
                        <div className='content-eduction-box'>
                            <h3> {featuredService.service_title}</h3>
                        </div>
                        <div>
                            {featuredService.descryption}
                        </div>
                        {/* <div>
                            {featuredService.service_type}
                        </div> */}
                        {/* <div>
                            {featuredService.featured_service}
                        </div> */}


                    </div>
                ))}
            </div>
        </>




    )
}

