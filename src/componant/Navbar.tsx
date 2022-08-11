import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';

import { Link } from 'react-router-dom';
import "../styles/navbar.css";
export function Navbar() {
    return (
        <>
            <nav className="nav-contain">

                <div>
                    <img className="nav-img" src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg" alt="" />
                </div>
                <div className="sub-title-nav">

                    <div>
                        <p>Home Page</p>
                    </div>
                    <div>
                        <p>Digital Wallet</p>
                    </div>
                    <div>
                        <p>Services</p>
                    </div>
                    <div>
                        <p>Data Panel</p>
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