import React, { useCallback, useState } from "react";
import { auth } from "../../base";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = (props, { history }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  let navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  

  const handleSignUp = async (event) => {
      event.preventDefault();
      try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
      setUser(user)
      props.setIsLoggedIn(true)
      

      } catch (error) {
        alert(error);
      }
    }

 

  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleEmail}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </label>
        <button onClick={handleSignUp} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
