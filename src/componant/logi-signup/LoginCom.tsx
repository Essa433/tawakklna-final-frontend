
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import "../../styles/login.css"
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


			{/* <form className="form-box-login" onSubmit={handleSubmit(handleLogin)}>

				<h3>Login</h3>

				<div>
					<label htmlFor="">National Id</label>
					<input type="text" placeholder="Enter your national id..." {...register("nationalId", { required: true })} />
					{errors.nationalId && <p>Please check the National Id</p>}
				</div>
				<div>
					<label htmlFor="">Password</label>
					<input type="text" placeholder="Enter your password..."  {...register("password", { required: true })} />
					{errors.nationalId && <p>Please check the Password</p>}
				</div>
				<div>
					<button>Login</button>
				</div>
			</form> */}

			<div className="login-box">
				<h2>Login</h2>
				<form onSubmit={handleSubmit(handleLogin)}>
					<div className="user-box">
						<input type="text" {...register("nationalId", { required: true })} />
						<label>National Id</label>
						{errors.nationalId && <p>Please check the National Id</p>}
					</div>

					<div className="user-box">
						<input type="password" {...register("password", { required: true })} />
						<label>Password</label>
					</div>
					<button>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Submit
					</button>
				</form>
			</div>


		</>

	)
}


