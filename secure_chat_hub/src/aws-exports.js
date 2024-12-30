const awsconfig = {
    Auth: {
      region: "us-east-1", // Your AWS region
      userPoolId: "us-east-1_ABCDEF123", // Your Cognito User Pool ID
      userPoolWebClientId: "abcdef123456789", // Your Cognito App Client ID
      identityPoolId: "us-east-1:abcdef12-3456-7890-abcd-ef1234567890", // Your Identity Pool ID
    },
    API: {
      endpoints: [
        {
          name: "SecureChatHubAPI",
          endpoint: "https://your-api-gateway-url.execute-api.us-east-1.amazonaws.com",
        },
      ],
    },
    Storage: {
      bucket: "your-s3-bucket-name",
      region: "us-east-1",
    },
  };
  
  export default awsconfig;
  