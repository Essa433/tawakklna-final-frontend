
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
            <h1>Data Panel Page</h1>
            <div className='container-service-card'>
                {DataPanel.map((DataPanel: any) => (

                    <div className='content-sub-box-servic'>

                        <div>
                            {DataPanel.aftar}
                        </div>
                        <div className='content-eduction-box'>
                            <h3> {DataPanel.Data_title}</h3>
                        <hr />
                        </div>
                        <div>
                            {DataPanel.DataPanel_type}
                        </div>


                    </div>
                ))}
            </div>
        </>




    )
}

