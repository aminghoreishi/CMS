import "../module/darkmode.js";
import "../module/clickNav.js";
import "../module/typeWtite.js";
import "../module/getName.js";
import { get__item } from "../module/getName.js";

let userid = null

window.addEventListener("load" , () => {
  userid = JSON.parse(localStorage.getItem('lo'))
})

let eye__open = document.querySelector(".eye__open");
let eye__close = document.querySelector(".eye__close");
let pass_input = document.querySelector("#pass_input");
let confrim_pass = document.querySelector("#confrim_pass");
let email_input = document.querySelector("#email_input");
let button = document.querySelector(".btnfg");
let ph_input = document.querySelector("#ph_input");
let form = document.querySelector("form");
let img = document.querySelector("#img");
let name_input = document.querySelector("#name_input");

let is_name = false;

name_input.addEventListener("keyup" , () => {
  let regex__item = /^\w{3,8}$/;
  is_name = !regex__item.test(name_input.value);
  if (!is_name) {
    name_input.classList.add("border-gray-600/30");
    name_input.classList.remove("border-red-600");
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    button.classList.remove("cursor-pointer");
    name_input.classList.remove("border-gray-600/30");
    name_input.classList.add("border-red-600");
    button.classList.add("cursor-not-allowed");
  }
  valid_input();
})

let is_email = false;
email_input.addEventListener("keyup", () => {
  let regex__item = /^\w+(\.?-?)+\w+@(\w)+\.\w{3}$/;
  is_email = !regex__item.test(email_input.value);
  if (!is_email) {
    email_input.classList.add("border-gray-600/30");
    email_input.classList.remove("border-red-600");
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    button.classList.remove("cursor-pointer");
    email_input.classList.remove("border-gray-600/30");
    email_input.classList.add("border-red-600");
    button.classList.add("cursor-not-allowed");
  }
  valid_input();
});
let is_pass = false;
pass_input.addEventListener("keyup", () => {
  let regex_pass_check = /^\w{8,12}$/;
  is_pass = !regex_pass_check.test(pass_input.value);

  if (!is_pass) {
    pass_input.classList.add("border-gray-600/30");
    pass_input.classList.remove("border-red-600");
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    pass_input.classList.remove("border-gray-600/30");
    pass_input.classList.add("border-red-600");
    button.classList.add("cursor-not-allowed");
  }
  valid_input();
});
let is__phone = false;
ph_input.addEventListener("keyup", () => {
  let regex__item = /^09(0[1-9]|1[0-9]|2[0-3]|3[0-9]|9[0-4])\d{7}$/;
  is__phone = !regex__item.test(ph_input.value);
  if (!is__phone) {
    ph_input.classList.add("border-gray-600/30");
    ph_input.classList.remove("border-red-600");
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    button.classList.remove("cursor-pointer");
    ph_input.classList.remove("border-gray-600/30");
    ph_input.classList.add("border-red-600");
    button.classList.add("cursor-not-allowed");
  }
  valid_input();
});

eye__open.addEventListener("click", () => {
  pass_input.setAttribute("type", "text");
  eye__open.classList.add("hidden");
  eye__close.classList.remove("hidden");
});

eye__close.addEventListener("click", () => {
  pass_input.setAttribute("type", "password");
  eye__open.classList.remove("hidden");
  eye__close.classList.add("hidden");
});

function valid_input() {
  console.log(
    "is_pass:",
    is_pass,
    "is__phone:",
    is__phone,
    "is_email:",
    is_email
  );

  if (!is_pass && !is__phone && !is_email) {
    button.disabled = false;
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    button.disabled = true;
    button.classList.add("cursor-not-allowed");
    button.classList.remove("cursor-pointer");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (confrim_pass.value === pass_input.value) {
    update_admin()
  }
  else {
    alert("error")
  }
});




async function update_admin() {
  try {
    let obj = {
      name: name_input.value,
      password: pass_input.value,
      img: img.value,
      email: email_input.value,
      phone: ph_input.value,
    };
    let get_show = await fetch(
      `https://dashbord-7bbff-default-rtdb.firebaseio.com/admins/${userid}.json`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body : JSON.stringify(obj)
      }
    );
    Swal.fire({
      title: "Update",
      icon: "succes",
      background: "#000",
      color: "#fff",
    });
    get__item()
  } catch (error) {
    console.log(error);
  }
}


