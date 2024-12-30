import React, { useState } from "react";
import { Auth } from "aws-amplify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  const signUp = async () => {
    try {
      await Auth.signUp({ username: email, password });
      setIsSignedUp(true);
      alert("Sign-up successful. Please check your email for a confirmation code.");
    } catch (error) {
      console.error(error.message);
    }
  };

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(email, confirmationCode);
      alert("Account confirmed! You can now sign in.");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {!isSignedUp ? (
        <>
          <h2>Sign Up</h2>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={signUp}>Sign Up</button>
        </>
      ) : (
        <>
          <h2>Confirm Sign Up</h2>
          <input
            type="text"
            placeholder="Confirmation Code"
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
          <button onClick={confirmSignUp}>Confirm</button>
        </>
      )}
    </div>
  );
};

export default SignUp;
