let parrafo = document.getElementById("excuse");
const btn = document.getElementById("btn");
btn.addEventListener("click", generateExcuse);

function generateExcuse() {
  parrafo.innerHTML = excuse();
}

function excuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var excuse1 = Math.floor(Math.random(who.length - 1) * 4);
  var excuse2 = Math.floor(Math.random(action.length - 1) * 4);
  var excuse3 = Math.floor(Math.random(what.length - 1) * 3);
  var excuse4 = Math.floor(Math.random(when.length - 1) * 5);
  var result =
    who[excuse1] +
    " " +
    action[excuse2] +
    " " +
    what[excuse3] +
    " " +
    when[excuse4];
  return result;
}

window.onload = function() {
  this.console.log(excuse());
};
