import React, { useCallback, useState, useContext } from "react";
import { auth } from "../../base";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = (props, { history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  let navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("user", JSON.stringify(user));
        console.log('app', email)
        navigate("/");
        props.setIsLoggedIn(true)
        
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

 

  return (
    <div>
      <h1>Log in</h1>
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
        <button onClick={handleLogin} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
