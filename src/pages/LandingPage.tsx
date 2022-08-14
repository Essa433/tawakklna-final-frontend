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
                        <p>الصفحة الرئيسية</p>
                    </div></Link>
                    <a className='about-twa-p' href="#container-about-about"><div >
                        <p>عن توكلنا</p>
                    </div></a>
                    <a className='about-twa-p' href="#contaner-vid">   <div>
                        <p>طريقة عمله</p>
                    </div></a>
                </div>

                <div className='btn-landing-page'>
                    <Link style={{ textDecoration: 'none' }} to="/sign-up"> <button className="btn-nav-sin"> Sign up </button></Link>
                    <Link style={{ textDecoration: 'none' }} to="/login" >  <button className="btn-nav-log"> Login <AiOutlineArrowRight /> </button></Link>
                </div>
            </nav>


            <div className='header-land-photo'>

                <div>
                    <img className='img-1-header-landingpage' src="https://ta.sdaia.gov.sa/images/hero.png" alt="" />
                    <div className='cont-left-on-img'>
                        التصاريح الالكترونية لاحتياجاتك الضرورية
                    </div>
                </div>

                <div className='btn-icons-cont'>
                    <div className='h1-h1-downlaod'>
                        <h1> حمّل نطبيق توكلنا</h1>
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
                    <h1 className='h1-about'>عن توكلنا</h1>
                    <p className='p-about'>انطلاقًا من حرص حكومة المملكة العربية السعودية -أيدها الله- على الحفاظ على صحة وسلامة المواطنين والمقيمين على أراضيها من خطر انتشار فيروس كورونا المستجد؛ قامت الهيئة السعودية للبيانات والذكاء الاصطناعي "سدايا" بإطلاق تطبيق "توكلنا"، وذلك لمساندة الجهود الحكومية لمواجهة فيروس كورونا.

                        هدف تطبيق "توكلنا" في بدايته إلى المساهمة في إدارة عملية منح التصاريح إلكترونيًا خلال فترة منع التجول، وذلك لمنسوبي القطاعات الحكومية، ومنسوبي القطاع الخاص، بالإضافة إلى الأفراد، بالتعاون مع وزارة الصحة وعدد من الجهات الحكومية خلال فترة المنع المفروضة، مما ساعد في الحد من انتشار فيروس كورونا في المملكة.</p>
                </div>
            </div>
            <div id='contaner-vid'>
                {/* <img src="https://ta.sdaia.gov.sa/images/hero.png" alt="" /> */}
                <iframe width="1683" height="755" vid-land src="https://www.youtube.com/embed/FN9JCUfLzzA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
            </div>

        </>
    )
}