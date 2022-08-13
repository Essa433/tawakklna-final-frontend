import { DatapanelComponant } from "../componant/DataPanel/MainDataPanelCom";
import { Navbar } from "../componant/Navbar";
import { ProfileCom } from "../componant/profile/profile";

export function DataPanelPage() {
    return (
        <>
            <Navbar />

            {/* --------------------------- profile----------------------- */}

            <ProfileCom />

            {/* -------------------------------------------------------- */}




            <div className="contain-service-box">


                <div className="containar-cards-inservices">
                    <DatapanelComponant />
                </div>

            </div>
        </>

    )
}