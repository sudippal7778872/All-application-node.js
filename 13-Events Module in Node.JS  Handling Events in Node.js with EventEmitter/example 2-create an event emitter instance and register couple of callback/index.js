// events
// we have to define event action first then we can call EventEmitter.

const EventEmitter = require("events");
const event = new EventEmitter();

// we can have multiple event action
event.on("sayMyName",()=>{
    console.log("Sudip");
})
event.on("sayMyName",()=>{
    console.log("Pal");
})

event.emit("sayMyName")