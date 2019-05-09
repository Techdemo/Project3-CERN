// api/index.js
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:5000/");

function connect(cb) {
    socket.on("connection", () => {
        console.log("user connected")
    })
    // listen for any messages coming through
    // of type 'chat' and then trigger the
    // callback function with said message
    socket.on("chat", () => {
        // console.log the message for posterity
        // trigger the callback passed in when
        // our App component calls connect
        cb();
    });
}

export { connect };