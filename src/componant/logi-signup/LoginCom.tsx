
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import "../../styles/login.css"
import "../../styles/signup.css"

import { useContext } from "react";
import { twkContext } from "../../Utils/TwkContext";


export function LoginComponant() {
	const navigate = useNavigate()
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { users } = useContext(twkContext)
	const handleLogin = async (e: any) => {
		try {
			const userBody = {
				nationalId: e.nationalId,
				password: e.password,
			}
			const response = await axios.post("http://localhost:3002/login", userBody)
			// localStorage.setItem("token", response.token)
			console.log(response);
			let userFind = users.find((u: any) => u.nationalId == e.nationalId)
			const userInfo = {
				userId: userFind.user_id,
				nationalId: userFind.nationalId,
				role: response.data.role
			}
			localStorage.setItem("userInfo", JSON.stringify(userInfo))
			localStorage.setItem("token", response.data.token)
			navigate("/home")
		} catch (error: any) {
			if (error.response) return console.log(error)
		}
	}

	return (
		< >



			<div className="login-box">
				<div className="img-logo">
					<img src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg" alt="" width={100} height={100} />
					{/* <img src="" alt="" width={100} height={100} /> */}
				</div>
				<h2 className="h2-loging">Login</h2>
				<form onSubmit={handleSubmit(handleLogin)}>
					<div className="user-box">
						<input type="text" {...register("nationalId", { required: true })} />
						<label>National Id</label>
						{errors.nationalId && <p>Please check the National Id</p>}
					</div>

					<div className="user-box">
						<input type="password" {...register("password", { required: true, })} />
						<label>Password</label>
						{errors.password && <p>Please check the National Id</p>}

					</div>
					<div className="btn-gocennn">

						<button className="btn-login-login-w">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Submit
						</button>
					</div>
				</form>
				<Link to="/sign-up"> <div className="contss">
					Go to sign up ?
				</div></Link>
			</div>


		</>

	)
}


