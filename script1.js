Enter.onclick = function () {
  let input = document.getElementById("Name").value;
  if (Name.value) {
    localStorage.setItem("username", input); //new elemts for this adventure!! (getItem and setitem)
    window.alert(
      "hello 🥰 " + input + " 🎉✨" + " CAN YOU PLEASE CLICK OK :> 😊"
    );
    window.location.href = "../PAGE2/home2.html";
  } else {
    mylabel.textContent = "Please user Spooky. 🥰";
    mylabel.style.color = "red";
  }
};
