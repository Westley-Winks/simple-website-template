"use strict";

var r = document.getElementById("rbw"),
  documentElement = document.getElementsByTagName("html")[0],
  clickEvent = "ontouchstart" in window ? "touchend" : "click",
  classMethods = ["remove", "add"],
  stringArray = ["Inverted Mode", "Normal Mode"];

function createControls() {
  var nightModeButton = document.createElement('button');
    nightModeButton.id = "invmode";
    nightModeButton.classList.add('cont-inv');
    nightModeButton.innerText = stringArray[0];
    nightModeButton.tabIndex = 2;
  document.body.appendChild(nightModeButton);
}

function someControl(id, textArr, className) {
  var el = document.getElementsByTagName("html")[0];
  var acbox = document.getElementById(id),
    textNode = acbox.firstChild,
    toggled = false;
  acbox.addEventListener(
    clickEvent,
    function() {
      var selector = Number((toggled = !toggled));
      textNode.data = textArr[selector];
      el.classList[classMethods[selector]](className);
    },
    false
  );
}

function addInvertedControl() {
  someControl("invmode", [stringArray[0], stringArray[1]], "inverted");
}

createControls();
addInvertedControl();