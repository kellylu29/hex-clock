function changeTime() {
  var clock = document.getElementById('clock')
  var time = new Date()

  var hours = time.getHours()
  var minutes = time.getMinutes()
  var seconds = time.getSeconds()
  
  if(hours <= 9) {hours = '0' + hours}
  if(minutes <= 9) {minutes = '0' + minutes}
  if(seconds <= 9) {seconds = '0' + seconds}
  
  var color = `#${hours}${minutes}${seconds}`

  var bg = document.querySelector('html')

  bg.style.backgroundColor = color
  
  clock.innerHTML = `${hours}:${minutes}:${seconds}`
  setInterval(changeTime, 1000)
}

changeTime()
