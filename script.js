setTimeout(function() {
  let bulb = document.querySelector("#off");
  function togglebulb() {
    if (bulb.src.includes("off.jpg")) {
      bulb.src = "on.jpg";
    }
    else {
      bulb.src = "off.jpg";
    }
  }
  setInterval(togglebulb, 3000);
}, 3000);