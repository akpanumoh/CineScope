import React, { useState } from "react";
import Logo from "../shared/logo";
import "./Login.css";


function Login(){
//     // setting tokens to users?\
// const datafromserver = await response. json();
// localStorage. setItem ("token", JSON.stringify(datafromserver))

// console.log(datafromserver);

// }
    return(

        <div className="login-page" >
            <div  className="login-card">


                <div className="brand">
                    <div className="logo" >

                        <Logo/>
                    </div>

                    <div>
                        <span className="brand-name">CineScope</span>
                    </div>
                </div>

                <div className="header-text">
                    <h2>Welcome back</h2>
                    <p>Sign in to continue your cinematic journey</p>
                </div>


                 <form
                    className="register-form">


                    <div className="field">
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            className="register-input"
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>


                    <div className="field">
                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            className="register-input"
                            type="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>



                    <button
                        type="submit"
                        className="register-submit"
                    >
                        Sign In
                    </button>

                </form>


                <div className="register-footer">
                    <span>Don't have an account? </span>

                    <a
                        href="#login"
                        className="register-login-link"
                    >
                        Sign In
                    </a>
                </div>


            </div>



        </div>

    )
}

export default Login;