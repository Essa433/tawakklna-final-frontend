
import '../../styles/service.css';

import { useContext, useEffect, useState } from 'react';
import { twkContext } from '../../Utils/TwkContext';
import { IDataPanel } from '../date/datapanelData';



interface DataPAnelProps {
    datapanel: IDataPanel;
}


export function DatapanelComponant() {
    const { DataPanel } = useContext(twkContext)

    return (
        <>
            <div className='container-service-card'>
                {DataPanel.map((DataPanel: any) => (

                    <div className='content-sub-box-servic'>

                        <div>
                            <img className='aftar-services-box' src={DataPanel.aftar} alt="" />
                        </div>
                        <div className='content-eduction-box'>
                            <h3> {DataPanel.Data_title}</h3>
                            <hr />
                        </div>
                        <div>
                            {DataPanel.descryption}
                        </div>
                        {/* <div>
                            {DataPanel.DataPanel_type}
                        </div> */}


                    </div>
                ))}
            </div>
        </>




    )
}

