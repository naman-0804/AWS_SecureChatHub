const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { connectionId, domainName, stage } = event.requestContext;

  if (event.requestContext.eventType === 'CONNECT') {
    await dynamoDB.put({
      TableName: 'WebSocketConnections',
      Item: { connectionId, domainName, stage },
    }).promise();
    return { statusCode: 200 };
  }

  if (event.requestContext.eventType === 'DISCONNECT') {
    await dynamoDB.delete({
      TableName: 'WebSocketConnections',
      Key: { connectionId },
    }).promise();
    return { statusCode: 200 };
  }

  if (event.body) {
    const message = JSON.parse(event.body).message;
    console.log('Received message:', message);

    const connections = await dynamoDB.scan({ TableName: 'WebSocketConnections' }).promise();
    const apigwManagementApi = new AWS.ApiGatewayManagementApi({
      endpoint: `${domainName}/${stage}`,
    });

    for (const connection of connections.Items) {
      try {
        await apigwManagementApi.postToConnection({
          ConnectionId: connection.connectionId,
          Data: message,
        }).promise();
      } catch (err) {
        console.error('Failed to post message:', err);
      }
    }
    return { statusCode: 200 };
  }

  return { statusCode: 400 };
};