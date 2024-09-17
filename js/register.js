import "../module/input.js";

let form = document.querySelector("form"),
  name__elem = document.querySelector(".name__elem"),
  input__pass = document.querySelector(".input__pass"),
  phone__elem = document.querySelector(".phone__elem"),
  email__phone = document.querySelector(".email__phone");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  add_user();

  clear_input();
});

async function add_user() {
  try {
    let obj = {
      name: name__elem.value,
      password: input__pass.value,
      phone: phone__elem.value,
      email: email__phone.value,
    };
    let add_user = await fetch(
      "https://dashbord-7bbff-default-rtdb.firebaseio.com/user.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    console.log(add_user);
  } catch (error) {
    console.log(error);
  }
}

function clear_input() {
  name__elem.value = "";
  input__pass.value = "";
  phone__elem.value = "";
  email__phone.value = "";
}

// get_user();
var app = document.getElementById("btn");

var typewriter = new Typewriter(app, {
  loop: false,
});

typewriter
  .typeString("Welcom")
  .pauseFor(2500)
  .deleteAll()
  .typeString("SignUp")
  .pauseFor(2500)
  .start();
