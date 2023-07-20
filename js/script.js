

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
setInterval(remainsTime, 400)


function correctTime(arg){
   if (arg.textContent < 10) arg.textContent = `0${arg.textContent}`
}



// 1. Створити об’єкт Date на дату: 20 лютого 2012, 3:12 ранку. Часовий пояс є місцевим.
// Показати його за допомогою alert.

// let date = new Date(2012, 1, 20, 3, 12)
// alert(date)


// 2. Напишіть функцію getWeekDay(date), щоб показати день тижня у короткому форматі: ‘ПН’, ‘ВТ’, ‘СР’, ‘ЧТ’, ‘ПТ’, ‘СБ’, ‘НД’.
// let nowDate = new Date()
// getWeekDay(nowDate)

// function getWeekDay(date){
   // let week = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
   // console.log(week[date.getDay()])
   // return week[date.getDay()]
// }


// 3. Європейські країни мають дні тижня, що починаються з понеділка (№ 1), потім вівторок (№ 2) та до неділі (№ 7). Напишіть функцію getLocalDay(date), що повертає “європейський” день тижня для date.

// let nowDate = new Date()
// getLocalDay(nowDate)

// function getLocalDay(date){
//    let week = ['7', '1', '2', '3', '4', '5', '6']
//    console.log(week[date.getDay()])
//    return week[date.getDay()]
// }

// 4. Створіть функцію getDateAgo(date, days), щоб повернути день місяця, який був days днів після date. 
// Наприклад, якщо сьогодні – 20-й, то getDateAgo(new Date(), 1) має бути 19-го, а getDateAgo(new Date(), 2) має бути 18-го.
// Має працювати надійно для days = 365 або більше:

// function getDateAgo(date, days) {
//    let nowDate = new Date(date)
 
//    nowDate.setDate(date.getDate() - days)
//    console.log(nowDate.getDate())
//    return nowDate.getDate()
//  }
 
//  let otherDate = new Date(2018, 3, 16);
//  getDateAgo(otherDate, 2)


// 5. Напишіть функцію getLastDayOfMonth(year, month), що повертає останній день місяця. Іноді це 30-е, 31-ше або навіть 28/29-е для лютого.
// Параметри:
// year – чотиризначний рік, наприклад 2012.
// month – місяць, від 0 to 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

// function getLastDayOfMonth(year, month) {
//    let nowDate = new Date(year, month + 1, 0);
//    console.log(nowDate.getDate());
//    return nowDate.getDate();
//  }
//  getLastDayOfMonth(2012, 1)


// 6. Напишіть функцію getSecondsToday(), що повертає кількість секунд з початку сьогоднішнього дня.

// Наприклад, якщо зараз 10:00 am, і не було зміни літнього часу, то: getSecondsToday() == 36000

// Функція повинна працювати в будь-який день. Тобто, вона не повинна мати жорстко-кодоване значення “сьогодні”.

// function getSecondsToday() {
//    let newDate = new Date();
//    let todayHours = newDate.getHours()
//    let todayMinutes = newDate.getMinutes()
//    let todaySecond = newDate.getSeconds()
//    let allSecond = todayHours * 3600 + todayMinutes * 60 + todaySecond

//    console.log(allSecond);
//    return allSecond

//  }
//  getSecondsToday()


// 7. Створіть функцію getSecondsToTomorrow(), що повертає кількість секунд до завтра.

// Наприклад, якщо зараз є 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функція повинна працювати в будь-який день, “сьогодні” не є жорстко закодованим.

// function getSecondsToTomorrow() {
//    let newDate = new Date();
//    let todayHours = newDate.getHours()
//    let todayMinutes = newDate.getMinutes()
//    let todaySecond = newDate.getSeconds()
//    let allSecond = todayHours * 3600 + todayMinutes * 60 + todaySecond
//    let secondInAllDay = 24 * 3600
//    let difference = secondInAllDay - allSecond
//    console.log(difference);
//    return difference

//  }
//  getSecondsToTomorrow()

// 8.Напишіть функцію formatDate(date), яка повинна форматувати date наступним чином:

// Якщо з date пройшла менше, ніж 1 секунда, то "прямо зараз".
// Інакше, якщо з date пройшло менше 1 хвилини, то "n сек. назад".
// Інакше, якщо менше години, то "m хв. назад".
// В іншому випадку повна дата у форматі "DD.MM.YY HH:mm". Тобто: "день.місяць.рік години:хвилини", все в 2-значному форматі, наприклад, 31.12.16 10:00.

// function formatDate(date) {
//    let year = date.getFullYear()
//    let month = date.getMonth() + 1
//    let day = date.getDate()
//    let hour = date.getHours()
//    let minutes = date.getMinutes()
// // console.log(year);
// //перетворюємо в стрічку, щоб вирізати дві останні цифри (для завдання)
//    year = year.toString().slice(-2)
// // console.log(year);
//    month = month < 10 ? `0${month}` : month
//    day = day < 10 ? `0${day}` : day
//    hour = hour < 10 ? '0' + hour : hour
//    minutes = minutes < 10 ? `0${minutes}` : minutes

//    let differenseSecond = Math.round((new Date() - date) / 1000)
//    let differenseMinute = differenseSecond / 60
//    let differenceHour = differenseSecond / 3600
 

 
//    if (differenseSecond < 1) {
//      return 'прямо зараз'
//    } else if (differenseMinute < 1) {
//      return `${differenseSecond} сек. назад`
//    } else if (differenceHour < 1) {
//      return `${differenseMinute} хв. назад`
//    } else {
//      return `${day}.${month}.${year} ${hour}:${minutes}`
//    }
//  }
//  console.log(formatDate(new Date(new Date - 86400 * 1000)) )