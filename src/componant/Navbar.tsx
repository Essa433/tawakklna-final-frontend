import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';

import { Link } from 'react-router-dom';
import "../styles/navbar.css";
export function Navbar() {
    return (
        <>
            <nav className="nav-contain">

                <Link to="/home"> <div>
                    <img className="nav-img" src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg" alt="" />
                </div></Link>
                <div className="sub-title-nav">

                    <Link to="/home">  <div>
                        <p>Home Page</p>
                    </div></Link>
                    <div>
                        <Link to="/digitalwallet"><p>Digital Wallet</p></Link>
                    </div>
                    <div>
                       <Link to="/services"><p>Services</p></Link> 
                    </div>
                    <div>
                        <Link to="/datapanel"><p>Data Panel</p></Link>
                    </div>
                    <div>
                        <p>Contact us</p>
                    </div>
                    <div>
                        <p>View more</p>
                    </div>
                </div>
                <div>
                </div>
                <div className='right-side-navbar'>
                    <div>
                        <input className="search-nav" type="text" name="search" placeholder="Search..." />
                    </div>
                    <button className="btn-nav-logout"> Login <AiOutlineArrowRight /> </button>
                </div>
            </nav>
        </>
    )
}