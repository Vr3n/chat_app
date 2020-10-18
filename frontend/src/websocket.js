class WebSocketService {

    static instance = null;

    callbacks = {};

    static getInstance () {
        if (!WebSocketService.instance) {
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;
    }

    constructor () {
        this.socketRef = null;
    }

}