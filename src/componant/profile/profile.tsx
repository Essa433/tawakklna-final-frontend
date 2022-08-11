import { useContext } from "react"
import "../../styles/profile.css"
import { twkContext } from "../../Utils/TwkContext"


export function ProfileCom() {

    const { users } = useContext(twkContext)

    return (


        <div>
            {users.map((users: any) => (

                <div className="container-box-profile">
                    <div className="header-profile">

                        <div>
                            <img className="profile-img" src={users.photo} alt="" />
                        </div>
                        <div >
                            <h1 className="person-name-profile"> {users.name}</h1>
                        </div>
                    </div>
                    <div className="sub-content">

                        <div>

                            <div>
                                <h4>Email</h4>
                                {users.email}
                            </div>
                            <div>
                                <h4>Age</h4>
                                {users.age}
                            </div>
                            <div>
                                <h4>Role</h4>
                                {users.role}
                            </div>
                            <div>
                                <h4>Nationality</h4>
                                {users.nationalId}
                            </div>
                            <div>
                                <h4>Place of birth</h4>
                                {users.place_birth}
                            </div>
                        </div>

                        <div>

                            <div>
                                <h4>Date of birth</h4>
                                {users.data_birth}
                            </div>
                            <div>
                                <h4>Phone Number</h4>
                                {users.phonenumber}
                            </div>
                            <div>
                                <h4>Nationality</h4>
                                {users.nationality}
                            </div>
                            <div>
                                <h4>Blood type</h4>
                                {users.blood_type}
                            </div>
                            <div>
                                <h4>Marital status</h4>
                                {users.marital_status}
                            </div>
                            <div>
                                <h4>Gender</h4>
                                {users.gender}
                            </div>


                        </div>
                    </div>

                    {/* <div>
                        {users.services}
                    </div> */}

                </div>
            ))}
        </div>


    )
}