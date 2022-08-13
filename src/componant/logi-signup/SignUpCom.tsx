import axios from "axios"
import firebase from "firebase"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import "../../styles/signup.css"
import { twkContext } from "../../Utils/TwkContext"


export function SignUpComponant() {

    const navigate = useNavigate()
    const {users} = useContext(twkContext)
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

        let usersEmail = users.map((u : any) => u.email)
        let usersNationalId = users.map((u : any) => u.nationalId)
        if(usersEmail.includes(form.elements.Email.value)) return alert("The User is Exist");
        if(usersNationalId.includes(form.elements.NationalId.value)) return alert("The User is Exist");
        
        
        // ------------- send data user to datbase --------------
        await axios.post("http://localhost:3002/users/users", body)

        navigate("/login")

    }

    // -------------- push to local Storage ------------


    return (

        <form onSubmit={handleSignUp} >
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="name" placeholder="name..." />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" name="Email" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" name="Password" />
            </div>
            <div>
                <label htmlFor="">National Id</label>
                <input type="text" name="NationalId" />
            </div>
            <div>
                <label htmlFor="">Age</label>
                <input type="text" name="age" />
            </div>
            <div>
                <label htmlFor="">Date of bitrth</label>
                <input type="text" name="DateBrith" />
            </div>
            <div>
                <label htmlFor="">Phone number</label>
                <input type="text" name="Phone" />
            </div>
            <div>
                <label htmlFor="">Place of birth</label>
                <input type="text" name="Place" />
            </div>
            <div>
                <label htmlFor="">Nationality</label>
                <input type="text" name="Nationality" />
            </div>
            <div>
                <label htmlFor="">Blood type</label>
                <input type="text" name="Blood" />
            </div> 
             <div>

                <select name="Marital">
                    <option value="Married"> Married</option>
                    <option value="Single"> Single</option>
                </select>
            </div>

            <div>
                <select name="gender">
                    <option value="Male"> Male</option>
                    <option value="Female"> Female</option>
                </select>
            </div>
            <div>
                <label htmlFor="">photo</label>
                <input type="text" name="photo" />
            </div>






{/* 
            <div>
                <label htmlFor="">national id photo</label>
                <input type="file" name="nationalPhoto" />
            </div>
            <div>
                <label htmlFor="">driving license photo</label>
                <input type="file" name="drivingPhoto" />
            </div>
            <div>
                <label htmlFor="">Vehicle registration photo </label>
                <input type="file" name="VehiclePhoto" />
            </div>
            <div>
                <label htmlFor="">Student Id photo
                </label>
                <input type="file" name="StudentIdPhoto" />
            </div>
            <div>
                <label htmlFor="">Credit card photo
                </label>
                <input type="file" name="CreditPhoto" />
            </div> */}

            <div>
                <button>Sign Up</button>
            </div>
        </form >
    )
}