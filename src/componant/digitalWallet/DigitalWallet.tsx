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



            <h1>Digital Wallet Page</h1>
            <div className='container-digitalwallet-card'>
                {DigitalWallet.map((DigitalWallet: any) => (

                    <div>
                        <div>
                            <div>
                                <div>
                                    {DigitalWallet.Document_Type}
                                </div>
                                <div>
                                    <img src={DigitalWallet.photo} alt="" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    {DigitalWallet.Document_Type}
                                </div>
                                <div>
                                    <img src={DigitalWallet.photo} alt="" />
                                </div>

                            </div>


                        </div>
                        <div>

                            <div>
                                <div>
                                    {DigitalWallet.Document_Type}
                                </div>
                                <div>
                                    <img src={DigitalWallet.photo} alt="" />
                                </div>


                            </div>
                            <div>
                                <div>
                                    {DigitalWallet.Document_Type}
                                </div>
                                <div>
                                    <img src={DigitalWallet.photo} alt="" />
                                </div>


                            </div>
                        </div>

                    </div>

                ))}
            </div>
        </>




    )
}

