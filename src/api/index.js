// api/index.js
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:5000/");

function connect(cb) {
    socket.on("connection", () => {
        console.log("api functie loopt")

        console.log("user connected")
    })

    socket.on('broadcast', function (data) {
        let countTag = document.getElementById("Count");
        countTag.innerHTML = data
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

    socket.on('log', function (data){

    })


}

export { connect };