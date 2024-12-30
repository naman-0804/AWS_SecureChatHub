class WebSocketService {
    constructor(apiUrl) {
      this.apiUrl = apiUrl;
      this.socket = null;
    }
  
    connect() {
      this.socket = new WebSocket(this.apiUrl);
  
      this.socket.onopen = () => console.log("WebSocket connected");
      this.socket.onclose = () => console.log("WebSocket disconnected");
      this.socket.onerror = (error) => console.error("WebSocket error", error);
    }
  
    sendMessage(message) {
      if (this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify(message));
      } else {
        console.error("WebSocket not connected");
      }
    }
  
    onMessage(callback) {
      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        callback(data);
      };
    }
  }
  
  export default WebSocketService;
  