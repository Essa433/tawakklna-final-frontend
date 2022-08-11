import { AiOutlineArrowRight } from 'react-icons/ai';
import "../styles/landing.css";
export function LandingPage() {
    return (
        <>

            <nav className="nav-contain-landing">

                <div>
                    <img className="nav-img" src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg" alt="" />
                </div>
                <div className="sub-title-nav">
                    <div>
                        <p>Home Page</p>
                    </div>
                    <div>
                        <p>About Tawakkalna</p>
                    </div>
                    <div>
                        <p>Contact us</p>
                    </div>
                </div>

                <div className='btn-landing-page'>
                    <button className="btn-nav-sin"> Sign up </button>
                    <button className="btn-nav-log"> Login <AiOutlineArrowRight /> </button>
                </div>
            </nav>

            <div>

                <img src="https://ta.sdaia.gov.sa/images/hero.png" alt="" />
            </div>
            <div>

                <img src="https://ta.sdaia.gov.sa/images/app.png" alt="" />
            </div>

        </>
    )
}