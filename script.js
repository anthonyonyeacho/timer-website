
var CountDownDate  = new Date("march o2,2024 15:00:00").getTime();
var x = setInterval(function(){
  var now = new Date().getTime();
  var distance = CountDownDate - now;

  var DAYS = Math.floor(distance /(1000 * 60 * 60 * 24));
var HOURS= Maths.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var MINUTES= Maths.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var SECONDS= Maths.floor((distance % (1000 * 60)) / 1000);

document.getElementById("DAYS").innerHTML =("0" + DAYS).slice(-2);
document.getElementById("HOURS").innerHTML = ("0" +HOURS).slice(-2);
document.getElementById("SECONDS").innerHTML =("0" + MINUTES).slice(-2);
document.getElementById("SECONDS").innerHTML = ("0" +SECONDS).slice(-2);

if(distance < 0){
  clearInterval(x);
  document.getElementById("countdown").innerHTML =
"EXPIRED";
}

},1000);