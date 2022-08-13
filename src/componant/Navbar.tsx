import { useContext } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';

import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import { twkContext } from '../Utils/TwkContext';
export function Navbar() {
    const { Logout } = useContext(twkContext)
    return (
        <>
            <nav className="nav-contain">

                <Link to="/home"> <div>
                    <img className="nav-img" src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg" alt="" />
                </div></Link>
                <div className="sub-title-nav">

                    <Link style={{ textDecoration: 'none', color: 'gray' }} to="/home">  <div>
                        <p>Home Page</p>
                    </div></Link>
                    <div>
                        <Link style={{ textDecoration: 'none', color: 'gray' }} to="/digitalwallet"><p>Digital Wallet</p></Link>
                    </div>
                    <div>
                        <Link style={{ textDecoration: 'none', color: 'gray' }} to="/services"><p>Services</p></Link>
                    </div>
                    <div>
                        <Link style={{ textDecoration: 'none', color: 'gray' }} to="/datapanel"><p>Data Panel</p></Link>
                    </div>
                    <div>
                        <Link style={{ textDecoration: 'none', color: 'gray' }} to="/profile"><p>Profile</p></Link>
                    </div>
                    {/* <div>
                        <p>Contact us</p>
                    </div> */}

                </div>
                <div>
                </div>
                <div className='right-side-navbar'>
                    <div>
                        <input className="search-nav" type="text" name="search" placeholder="Search..." />
                    </div>
                    <button onClick={Logout} className="btn-nav-logout"> Logout <AiOutlineArrowRight /> </button>
                </div>
            </nav>
        </>
    )
}