
import "../../styles/login.css"
export function LoginComponant() {

	// const login = async e => {
	// 	try {
	// 	  e.preventDefault()
	// 	  const form = e.target
	// 	  const userBody = {
	// 		email: form.elements.email.value,
	// 		password: form.elements.password.value,
	// 	  }
	// 	  const response = await axios.post("http://localhost:5000/api/auth/login", userBody)
	// 	  const token = response.data
	// 	  localStorage.tokenEmployment = token
	// 	  toast.success("Login Success")
	// 	  getProfile()
	// 	  navigate("/")
	// 	} catch (error) {
	// 	  if (error.response) toast.error(error.response.data)
	// 	  else console.log(error)
	// 	}
	//   }

	return (
		<>

			<h1>I am Login Page</h1>
			<form className="form-box-login">

				<h3>Login</h3>

				<div>
					<label htmlFor="">National Id</label>
					<input type="text" name="nationalId" placeholder="Enter your national id..." />
				</div>
				<div>
					<label htmlFor="">Password</label>
					<input type="text" name="password" placeholder="Enter your password..." />
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
		</>

	)
}
