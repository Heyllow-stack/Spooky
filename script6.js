btn9.onclick = function () {
  window.location.href = "../PAGE1/home1.html";
};
let place = localStorage.getItem("place");
document.getElementById("span1").textContent = place;
span1.style.fontWeight = "bold";
let dateType2 = localStorage.getItem("Time");
document.getElementById("span2").textContent = dateType2;
span2.style.fontWeight = "bold";
let storedName = localStorage.getItem("username");
document.getElementById("span3").textContent = storedName;
span3.style.fontWeight = "bold";
