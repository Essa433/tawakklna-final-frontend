
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
            <h1>featured Service Page</h1>
            <div className='container-service-card'>
                {featuredService.map((featuredService: any) => (

                    <div className='content-sub-box-servic'>

                        <div>
                            {featuredService.aftar}
                        </div>
                        <div>
                            {featuredService.service_title}
                        </div>
                        <div className='content-eduction-box'>
                            <h3> {featuredService.service_type}</h3>
                            <hr />
                        </div>
                        <div>
                            {featuredService.featured_service}
                        </div>


                    </div>
                ))}
            </div>
        </>




    )
}

