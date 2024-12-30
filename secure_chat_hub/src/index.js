import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";


// Configure Amplify
Amplify.configure(awsconfig);

// Render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
