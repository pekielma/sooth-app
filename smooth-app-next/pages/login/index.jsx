import React, { useCallback, useState, useContext } from "react";
import { auth } from "../../base";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router'



const Login = (props, { history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  
  
  

  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("user", JSON.stringify(user));
        router.push()
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
