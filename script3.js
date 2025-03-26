btn4.onclick = function () {
  window.alert("SUS Cancel mopa nandito kana");
  document.getElementById("btn4").style.display = "none";
  let = document.getElementById("btn3");
  btn3.style.position = "absolute";
  btn3.style.left = "200";
  btn3.style.top = "80%";
};
btn3.onclick = function () {
  let storedName = localStorage.getItem("username"); //new elemts for this adventure!! (getItem)
  if (dateType.value) {
    localStorage.setItem("date", dateType.value);
    window.alert("sure nato ha " + storedName + " 😜");
    window.location.href = "../PAGE4/home4.html";
  } else {
    window.alert("pili ka kasi muna " + storedName + " excited yarn 😂");
  }
};
