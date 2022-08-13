import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
import { SiHuawei } from 'react-icons/si';


import { Link } from 'react-router-dom';
import "../styles/landing.css";
export function LandingPage() {
    return (
        <>

            <nav className="nav-contain-landing">

                <div>
                    <img className="nav-img" src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg" alt="" />
                </div>
                <div className="sub-title-nav">
                    <Link style={{ textDecoration: 'none', color: 'gray' }} to="/">  <div>
                        <p>Home Page</p>
                    </div></Link>
                    <a className='about-twa-p' href="#container-about-about"><div >
                        <p>About Tawakkalna</p>
                    </div></a>
                    <div>
                        <p>Contact us</p>
                    </div>
                </div>

                <div className='btn-landing-page'>
                    <Link style={{ textDecoration: 'none' }} to="/sign-up"> <button className="btn-nav-sin"> Sign up </button></Link>
                    <Link style={{ textDecoration: 'none' }} to="/login" >  <button className="btn-nav-log"> Login <AiOutlineArrowRight /> </button></Link>
                </div>
            </nav>


            <div className='header-land-photo'>

                <div>
                    <img className='img-1-header-landingpage' src="https://ta.sdaia.gov.sa/images/hero.png" alt="" />
                </div>
                <div className='btn-icons-cont'>
                    <div className='h1-h1-downlaod'>
                        <h1> Download Tawakkalna App</h1>
                    </div>
                    <div className='btn-icons'>

                        <a href="https://apps.apple.com/sa/app/tawakkalna/id1506236754"> <button className='btn-icon-store-apple'>
                            {/* <BsApple size={40} />
                            <p>App Store</p> */}
                        </button></a>
                        <a href="https://play.google.com/store/apps/details?id=sa.gov.nic.tawakkalna"> <button className='btn-icon-store-sum'>
                            {/* <FaGooglePlay size={40} />
                            <p>Google Play</p> */}
                        </button></a>
                        <a href="https://appgallery.huawei.com/#/app/C102438999"><button className='btn-icon-store-huaw'>
                            {/* <SiHuawei size={40} />
                            <p>App Gallery</p> */}
                        </button></a>
                    </div>
                </div>
            </div>

            <div id='container-about-about' className='container-about-tawa'>
                <div>
                    <img className='mobile-photo' src="https://ta.sdaia.gov.sa/images/app.png" alt="" />
                </div>
                <div>
                    <h1 className='h1-about'>About tawakklna</h1>
                    <p className='p-about'>Proceeding from the keenness of the government of the Kingdom of Saudi Arabia - may God support it - to preserve the health and safety of citizens and residents on its lands from the danger of the spread of the new Corona virus; The Saudi Data and Artificial Intelligence Authority "Sdaya" has launched the "Tawakkalna" application, in order to support government efforts to confront the Corona virus.

                        At its inception, the “Tawakkalna” application aimed to contribute to managing the process of granting permits electronically during the curfew period, for employees of government sectors, employees of the private sector, in addition to individuals, in cooperation with the Ministry of Health and a number of government agencies during the imposed ban period, which helped reduce from the spread of the Corona virus in the Kingdom.

                        During the cautious return phase, and the lifting of the ban measures, the application launched several important new services that contribute to achieving a safe return, most notably clarifying the health status of the application user through colored codes with the highest levels of security and privacy.</p>
                </div>
            </div>
            <div>
                {/* <img src="https://ta.sdaia.gov.sa/images/hero.png" alt="" /> */}
                <iframe width="1683" height="755" vid-land src="https://www.youtube.com/embed/FN9JCUfLzzA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
            </div>

        </>
    )
}