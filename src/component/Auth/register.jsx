// import React, { useState } from "react";
// import Logo from "../shared/logo";
// import "./Register.css";


// const [login, setLogin] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     LastName: "",
//     email: "",
//     passWord: "",
//     confirmPassword: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((previous) => ({ ...previous, [name]: value }));
//     // console.log(formData);
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true)
//    try {
         
//     // if (!formData.fullName || !formData.email || !formData.passWord) return; alert("all inputs are required") 
    
//     const response = await fetch ("https://zyloo-api-v1.onrender.com/auth/register", {
//       method: "POST", 
//       headers: {"Content-Type" : "application/json"}, 
//       credentials: "include",
//       body: JSON.stringify( formData )
//     })
    
//     const getRegisted = await response.json()
//     console.log(getRegisted);
//     setIsLoading(false)
//    } catch (error) {
//     console.log(error)
//     setIsLoading(false)
//    }
    
//   };
//   // https://zyloo-api-v1.onrender.com/auth/login 
//   //    https://zyloo-api-v1.onrender.com/auth/register




//   // console.log(formData)

//   return (
//     <div className="register-page">
//       <div className="register-card">
//         <div className="register-brand">
//           <div className="logo">
//             <Logo />
//           </div>
//           <div>
//             <span className="register-brand-name">CineScope</span>
//           </div>
//         </div>

//         <div className="register-header">
//           <h1 className="register-title">Create an account</h1>

//           <p className="register-subtitle">
//             Join CineScope and start your cinematic journey.
//           </p>
//         </div>

//         <form className="register-form" onSubmit={handleSubmit}>
//           <div className="register-field">
//             <label htmlFor="name">First Name</label>

//             <input
//               className="register-input"
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="Enter your full name"
//             />
//           </div>

//            <div className="register-field">
//             <label htmlFor="name">last Name</label>

//             <input
//               className="register-input"
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Enter your last name"
//             />
//           </div>

//           <div className="register-field">
//             <label htmlFor="email">Email</label>

//             <input
//               className="register-input"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="register-field">
//             <label htmlFor="password">Password</label>

//             <input
//               className="register-input"
//               type="password"
//               name="passWord"
//               value={formData.passWord}
//               onChange={handleChange}
//               placeholder="Create a password"
//             />
//           </div>

//           <div className="register-field">
//             <label htmlFor="confirmPassword">Confirm Password</label>

//             <input
//               className="register-input"
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm your password"
//             />
//           </div>

//           <button type="submit" className="">
//             Create Account ?
//             {Login ? "loading...." : "Create account"}
//           </button>

//           {login && (
//             <button type="submit" className="register-submit">
//               {isLoading ? "loading...." : "Create account"}
             
//             </button>
//           )}
           
//         </form>

//         <div className="register-footer">
//           <span>Already have an account? </span>

//           <a href="#login" className="register-login-link">
//             Sign In
//           </a>
//         </div>
//       </div>
//     </div>
//   );


// export default register;