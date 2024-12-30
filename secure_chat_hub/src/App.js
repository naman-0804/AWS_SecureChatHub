import React, { useState } from "react";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import ChatBox from "./components/Chat/ChatBox";
import FileUploader from "./components/Chat/FileUploader";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {!loggedIn ? (
        <>
          <SignUp />
          <SignIn setLoggedIn={setLoggedIn} />
        </>
      ) : (
        <>
          <h1>Welcome to SecureChatHub</h1>
          <FileUploader />
          <ChatBox />
        </>
      )}
    </div>
  );
};

export default App;
