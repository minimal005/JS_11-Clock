

const hour = document.querySelector('.clock_hour')
const minute = document.querySelector('.clock_minute')
const second = document.querySelector('.clock_second')
const spanClock = document.querySelectorAll('span')
const secondNewYear = document.querySelector('.newYear_second')

let time = [hour, minute, second]
let newYear = new Date(2023,11,31,23,59,59)
let newClock

function getTime(){
   newClock = new Date()
   hour.textContent = newClock.getHours()
   minute.textContent = newClock.getMinutes()
   second.textContent = newClock.getSeconds()

   for (let elem of spanClock){
      elem.classList.toggle('hidden')
   }
   for (let elem of time){
      correctTime(elem)
   }
}
function remainsTime(){
   newClock = new Date()
   let remainsToNewYear = Date.parse(newYear) / 1000 + 1 - Date.parse(newClock) / 1000
   secondNewYear.textContent = remainsToNewYear
}
setInterval(getTime, 400)
setInterval(remainsTime, 500)


function correctTime(arg){
   if (arg.textContent < 10) arg.textContent = `0${arg.textContent}`
}


