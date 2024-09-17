let app = document.querySelector(".textHome");
let textHome2 = document.querySelector(".textHome2");
let textHome3 = document.querySelector(".textHome3");

var typewriter = new Typewriter(app, {
  loop: false,
});
var typewriter2 = new Typewriter(textHome2, {
  loop: false,
});
var typewriter3 = new Typewriter(textHome3, {
  loop: false,
});
typewriter.typeString("Users").start();
typewriter2.typeString("Chart").start();
typewriter3.typeString("Information").start();
