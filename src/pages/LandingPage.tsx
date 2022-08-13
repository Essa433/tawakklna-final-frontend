import { AiOutlineArrowRight } from 'react-icons/ai';
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
                    <Link to="/login">  <button className="btn-nav-log"> Login <AiOutlineArrowRight /> </button></Link>
                </div>
            </nav>

            {/* <div className='cont-vide-place'> */}
                {/* <div className='left-vid'>
                    <h1 className='h1-land'>How is Tawakkalna Working</h1>
                    <div>
                    <h2 className='h2-land' >How to register in our trust?</h2>
                    </div>
                    <div>
                    <h2 className='h2-land' >for individuals</h2>
                    </div>
                    <div>
                    <h2 className='h2-land' >During the partial ban</h2>
                    </div>
                    <div>
                    <h2 className='h2-land' >Express Delivery App Permits</h2>
                    </div>

                </div> */}
                <div>
                    {/* <img src="https://ta.sdaia.gov.sa/images/hero.png" alt="" /> */}
                    <iframe width="1683" height="670" vid-land src="https://www.youtube.com/embed/FN9JCUfLzzA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            {/* </div> */}
            <div>

                <img src="https://ta.sdaia.gov.sa/images/app.png" alt="" />
            </div>

        </>
    )
}