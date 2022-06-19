// events
// we have to define event action first then we can call EventEmitter.

const EventEmitter = require("events");
const event = new EventEmitter();

event.on("myPage",(statuscode, message)=>{
    console.log(`statuscode of page is ${statuscode} and message is ${message}`);
})
event.emit("myPage", 200, "ok")