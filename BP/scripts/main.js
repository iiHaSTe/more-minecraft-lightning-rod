import {
  world,
  Location,
} from "mojang-minecraft";

const events = world.events;

events['tick'].subscribe(e => {
  setTimeout(()=>{
    console.error("hi")
  }, 20000)
})



