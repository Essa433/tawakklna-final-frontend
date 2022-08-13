import { useContext } from "react"
import "../../styles/profile.css"
import { twkContext } from "../../Utils/TwkContext"


export function ProfileCom() {

    const { profile } = useContext(twkContext)
    let userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
    // const userProfile = users?.find((u: any) => u.user_id == userInfo.userId)
    // console.log(userInfo , users);

    return (
        <>

            <div className="container-profile-at-all" >
                {/* {users.map((users: any) => ( */}

                <div className="container-box-profile">
                    <div className="header-profile">

                        <div>
                            <img className="profile-img" src={profile.photo} alt="" />
                        </div>
                        <div >
                            <h1 className="person-name-profile"> {profile.name}</h1>
                        </div>
                    </div>
                    <div className="sub-content">

                        <div>
                            <div>
                                <h4>Email</h4>
                                {profile.email}
                            </div>
                            <div>
                                <h4>Age</h4>
                                {profile.age}
                            </div>
                            <div>
                                <h4>Role</h4>
                                {profile.role}
                            </div>
                            <div>
                                <h4>Nationality</h4>
                                {profile.nationalId}
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Place of birth</h4>
                                {profile.place_birth}
                            </div>


                            <div>
                                <h4>Date of birth</h4>
                                {profile.data_birth}
                            </div>
                            <div>
                                <h4>Phone Number</h4>
                                {profile.phonenumber}
                            </div>
                            <div>
                                <h4>Nationality</h4>
                                {profile.nationality}
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Blood type</h4>
                                {profile.blood_type}
                            </div>
                            <div>
                                <h4>Marital status</h4>
                                {profile.marital_status}
                            </div>
                            <div>
                                <h4>Gender</h4>
                                {profile.gender}
                            </div>


                        </div>
                    </div>

                    {/* <div>
                        {users.services}
                    </div> */}

                </div>
                {/* ))} */}
            </div>

            <div>
                <h1>My booked </h1>
                {profile.services?.map((s: any) => (
                    <div>

                        <div>
                        <img src= {s.aftar} alt="" />   
                        </div>
                        <div>
                            {s.service_title}
                        </div>
                        <div>
                            {s.service_type}
                        </div>
                    </div>

                ))}
            </div>
        </>


    )
}