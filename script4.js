let storedDate = localStorage.getItem("date");
document.getElementById("mylabel2").textContent = storedDate;
mylabel2.style.fontWeight = "bold";
btn6.onclick = function () {
  window.alert("WAG!😠 sge ka walaka Tobleron");
  document.getElementById("btn6").style.display = "none";
  let = document.getElementById("btn5");
  btn5.style.position = "none";
  btn5.style.left = "200px";
  btn5.style.top = "75%";
};
btn5.onclick = function () {
  let storedName = localStorage.getItem("username");
  if (sagot.value) {
    localStorage.setItem("place", sagot.value); // value of place
    window.alert(
      "sge jan tayo sa " +
        sagot.value +
        " lagot ka saken pag dika mag pakita " +
        storedName
    );
    window.location.href = "../PAGE5/home5.html";
  } else {
    window.alert(
      "suggest ka kasi muna kung saan " +
        storedName +
        " excited ka talaga na bata 😂"
    );
  }
};
