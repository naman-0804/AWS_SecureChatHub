const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  const params = {
    TableName: 'ChatMessages',
    Item: {
      chatId: body.chatId,
      timestamp: new Date().toISOString(),
      message: body.message,
      sender: body.sender,
    },
  };

  await dynamoDB.put(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'Message stored successfully!' }),
  };
};
