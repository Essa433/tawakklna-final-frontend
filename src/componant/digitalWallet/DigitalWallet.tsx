import { useContext } from "react"
import { twkContext } from "../../Utils/TwkContext"
import "../../styles/digitalwallet.css"
// const { DigitalWallet } = useContext(twkContext)

// interface DataPAnelProps {
//     datapanel: IDataPanel;
// }


export function DigitalWalletComponant() {
    const { DigitalWallet, users } = useContext(twkContext)
    return (
        <>



            <div className='container-digitalwallet-card'>
                {DigitalWallet.map((DigitalWallet: any) => (

                    <div className="contain-card-decument">

                        <div className="phrogr-decumentaions">
                            {DigitalWallet.Document_Type}
                        </div>
                        <div>
                            <img className="decum-image" src={DigitalWallet.photo} alt="" />
                        </div>

                    </div>

                ))}
            </div>
        </>




    )
}

