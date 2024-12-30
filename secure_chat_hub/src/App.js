import React, { useState } from "react";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import ChatBox from "./Components/Chat/ChatBox";
import FileUploader from "./Components/Chat/FileUploader";

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
