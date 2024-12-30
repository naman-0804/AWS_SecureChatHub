import React, { useState } from "react";
import { Auth } from "aws-amplify";

const SignIn = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await Auth.signIn(email, password);
      setLoggedIn(true);
      alert("Login successful!");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
