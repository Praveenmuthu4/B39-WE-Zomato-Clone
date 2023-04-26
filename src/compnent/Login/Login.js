import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Login.css'


export default function Login() {
  const navigate = useNavigate();
  const history = useNavigate();

  const [passshow, setpassshow] = useState(false);
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
});

const setVal = (e) => {
  const { name, value } = e.target;

  setInpval(() => {
      return {
          ...inpval,
          [name]: value
      }
  })
};

const loginuser = async(e) => {
  e.preventDefault();

  const { email, password } = inpval;

  if (email === "") {
      toast.error("email is required!", {
          position: "top-center"
      });
  } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
          position: "top-center"
      });
  } else if (password === "") {
      toast.error("password is required!", {
          position: "top-center"
      });
  } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
          position: "top-center"
      });
  } else {

    //   const data = await fetch(`${API}/login`,{
    //       method:"POST",
    //       headers:{
    //           "Content-Type":"application/json"
    //       },
    //       body:JSON.stringify({
    //            email, password
    //       })
    //   });

    //   const res = await data.json();
      //  console.log(res);

      if(res.status === 201){
          localStorage.setItem("usersdatatoken",res.result.token);
          history("/logout")
          setInpval({...inpval,email:"",password:""});
      }else{
          toast.error("Invalid Credentials", {
              position: "top-center"
          });
      }
  }
}
  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1 color="#d14e4e">Welcome Back, Log In</h1>
          <p>Hi, we are glad you are back. Please login and grab your delious food orders</p>
        </div>
        <form >
          <div className="form_input_1">
            <label>Username:</label>
            <input
              id="email"
              type='email'
              name="email"
              placeholder="Enter your Username"
              value={inpval.email}
              onChange={setVal}
            />
          </div>
          <div className="form_input">
            <div className="two">
              <label>Password:</label>
              <input
                id="Password"
                placeholder="Enter your Password"
                type={!passshow ? "password" : "text"}
                name="password"
                value={inpval.password}
              onChange={setVal}
              />
              <div className="showpass" onClick={() => setpassshow(!passshow)}>
                {" "}
                {!passshow ? <i className="fa fa-eye-slash" ></i> : <i className="fa fa-eye"></i>}
              </div>
            </div>
          </div>
          <button type="submit" size="small" className="btn"  onClick={loginuser}>
            Login
          </button>
          <div className="bottom_form_data">   
            <a href="#" underline="hover" className="link" onClick={()=>navigate('/resetPassword')}>
              Forget Password?
            </a>
            <button type="submit" className="btn_1" onClick={()=>navigate('/register')}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
