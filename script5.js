let place = localStorage.getItem("place");
document.getElementById("blah").textContent = place;
blah.style.fontWeight = "bold";
btn7.onclick = function () {
  let storedName = localStorage.getItem("username");
  if (dateType2.value) {
    localStorage.setItem("Time", dateType2.value); // value of time
    window.alert(
      "sure na talaga yan " +
        dateType2.value +
        " ha " +
        storedName +
        " bantay ka saken hahaha"
    );
    window.location.href = "../PAGE6/home6.html";
  } else {
    window.alert("pili ka kasi muna kulit mo " + storedName + " ahh");
  }
};
btn8.onclick = function () {
  let storedName = localStorage.getItem("username");
  window.alert("WAG!😠 tatakas ka nanaman ahh " + storedName);
  document.getElementById("btn8").style.display = "none";
  let = document.getElementById("btn5");
  btn7.style.position = "none";
  btn7.style.left = "250px";
  btn7.style.top = "75%";
};
