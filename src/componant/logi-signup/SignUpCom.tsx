import axios from "axios"
import firebase from "firebase"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../../styles/signup.css"
import { twkContext } from "../../Utils/TwkContext"
// import logo from "../../../public/"


export function SignUpComponant() {

    const navigate = useNavigate()
    const { users } = useContext(twkContext)
    // console.log(users);


    const handleSignUp = async (e: any) => {

        e.preventDefault()
        const form = e.target

        // --------------------------------------
        //   to uplude file from firebase

        // let AvatarUrl
        // const avatarImage = form.elements.photo.files[0]
        // const avatarRef = firebase.storage().ref("photo").child(`${avatarImage.lastModified}-${avatarImage.name}`)
        // await avatarRef.put(avatarImage)
        // AvatarUrl = await avatarRef.getDownloadURL()

        // -------------------------------------------

        const body = {
            email: form.elements.Email.value,
            name: form.elements.name.value,
            age: form.elements.age.value,
            role: "User",
            nationalId: form.elements.NationalId.value,
            date_birth: form.elements.DateBrith.value,
            phoneNumber: form.elements.Phone.value,
            place_birth: form.elements.Place.value,
            nationality: form.elements.Nationality.value,
            password: form.elements.Password.value,
            blood_type: form.elements.Blood.value,
            marital_status: form.elements.Marital.value,
            gender: form.elements.gender.value,
            services: [],
            datapanel: [],
            photo: form.elements.photo.value,
        }

        let usersEmail = users.map((u: any) => u.email)
        let usersNationalId = users.map((u: any) => u.nationalId)
        if (usersEmail.includes(form.elements.Email.value)) return alert("The User is Exist");
        if (usersNationalId.includes(form.elements.NationalId.value)) return alert("The User is Exist");


        // ------------- send data user to datbase --------------
        await axios.post("http://localhost:3002/users/users", body)

        navigate("/login")

    }

    // -------------- push to local Storage ------------


    return (

        <>

            <div className="signup-box">
                <div>
                    <img src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg" alt="" width={100} height={100} />
                </div>
                <h2 className="h2-inthesign">Sign up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="box-containsignup">
                        <div>

                            <div className="user-box" >
                                <input type="text" name="name" />
                                <label>Name</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="Email" />
                                <label>Email</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="Password" />
                                <label>Password</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="NationalId" />
                                <label>National Id</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="age" />
                                <label>Age</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="DateBrith" />
                                <label>Date of bitrth</label>
                            </div>
                        </div>
                        <div>

                            <div className="user-box">
                                <input type="text" name="Phone" />
                                <label>Phone number</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="Place" />
                                <label>Place of birth</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="Nationality" />
                                <label>Nationality</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="Blood" />
                                <label>Blood type</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="photo" />
                                <label>photo</label>
                            </div>
                            <div className="contain-select" >
                                <div >

                                    <select className="marid-box" name="Marital">
                                        <option value="Married"> Married</option>
                                        <option value="Single"> Single</option>
                                    </select>
                                    {/* <label>Name</label> */}
                                </div>

                                <div >
                                    <select className="marid-box" name="gender">
                                        <option value="Male"> Male</option>
                                        <option value="Female"> Female</option>
                                    </select>
                                    {/* <label>Name</label> */}
                                </div>

                            </div>
                        </div>
                    </div>



                    <button className="btn-sign-up-go">
                        {/* <span></span> */}
                        <span></span>
                        <span></span>
                        <span></span>
                        Sign Up
                    </button>
                </form>
                <Link to="/login"> <div className="contss">
                    Do you have an account ?
                </div></Link>
            </div>



        </>

    )
}