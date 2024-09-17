import { get_user_show } from "../js/main.js";
let userid = null;
let overlay = document.querySelector(".overlay2");
let closeMOd = document.querySelector(".closeMOd");
let form = document.querySelector("form");
let showModalU = document.querySelector(".showModalU");
let input__pass = document.querySelector(".input__pass");
let button = document.querySelector(".buttonj");
let phone__elem = document.querySelector(".phone__elem");
let name__elem = document.querySelector(".name__elem");

window.editUser = function (item) {
  overlay.style.display = "block";
  showModalU.classList.remove("invisible");
  showModalU.classList.add("visible");
  showModalU.classList.remove("opacity-0");
  showModalU.classList.remove("opacity-100");
  userid = item;
};

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  console.log("jkjk");

  showModalU.classList.remove("visible");
  showModalU.classList.add("invisible");

  showModalU.classList.add("opacity-0");
  showModalU.classList.remove("opacity-100");
});

closeMOd.addEventListener("click", () => {
  overlay.style.display = "none";
  console.log("jkjk");

  showModalU.classList.remove("visible");
  showModalU.classList.add("invisible");

  showModalU.classList.add("opacity-0");
  showModalU.classList.remove("opacity-100");
});

// * pass
let is_pass = null;
input__pass.addEventListener("keyup", (event) => {
  let regex_pass_check = /^\w{8,12}$/;
  is_pass = !regex_pass_check.test(input__pass.value);

  if (!is_pass) {
    input__pass.classList.add("border-gray-200/25");
    input__pass.classList.remove("border-red-600");
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    input__pass.classList.remove("border-gray-200/25");
    input__pass.classList.add("border-red-600");
    button.classList.add("cursor-not-allowed");
  }

  valid_input();
});
// * pass
let is__phone = null;
let is_name = null
name__elem.addEventListener("keyup", () => {
  let regex_pass_check = /^\w{3,12}$/;
  is_name = !regex_pass_check.test(name__elem.value);

  if (!is_name) {
    name__elem.classList.add("border-gray-200/25");
    name__elem.classList.remove("border-red-600");
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    name__elem.classList.remove("border-gray-200/25");
    name__elem.classList.add("border-red-600");
    button.classList.add("cursor-not-allowed");
  }
  valid_input();
});

phone__elem.addEventListener("keyup", () => {
  let regex__item = /^09(0[1-9]|1[0-9]|2[0-3]|3[0-9]|9[0-4])\d{7}$/;
  is__phone = !regex__item.test(phone__elem.value);
  if (!is__phone) {
    phone__elem.classList.add("border-gray-200/25");
    phone__elem.classList.remove("border-red-600");
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    button.classList.remove("cursor-pointer");
    phone__elem.classList.remove("border-gray-200/25");
    phone__elem.classList.add("border-red-600");
    button.classList.add("cursor-not-allowed");
  }
  get_item();
});

let is_some = null;

async function get_item() {
  let get_item = await fetch(
    "https://dashbord-7bbff-default-rtdb.firebaseio.com/user.json"
  );
  let get_json = await get_item.json();

  console.log(get_json);

  is_some = Object.values(get_json).some(
    (item) => item.phone === phone__elem.value
  );

  if (is_some) {
    Swal.fire({
      title: "Phone already exists",
      icon: "error",
      background: "#000",
      color: "#fff",
    });
  }

  valid_input();
}

// * rmail
let email__phone = document.querySelector(".email__phone");

let is_email = null;

email__phone.addEventListener("keyup", () => {
  let regex__item = /^\w+(\.?-?)+\w+@(\w)+\.\w{3}$/;
  is_email = !regex__item.test(email__phone.value);
  if (!is_email) {
    email__phone.classList.add("border-gray-200/25");
    email__phone.classList.remove("border-red-600");
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    button.classList.remove("cursor-pointer");
    email__phone.classList.remove("border-gray-200/25");
    email__phone.classList.add("border-red-600");
    button.classList.add("cursor-not-allowed");
  }
  valid_input();
});
function valid_input() {
  console.log(
    "is_pass:",
    is_pass,
    "is__phone:",
    is__phone,
    "is_email:",
    is_email,
    "is_some:",
    is_some
  );

  if (!is_pass && !is__phone && !is_email && !is_some && !is_name) {
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
  e.preventDefault();
  console.log("k");
  update_user();
});

async function update_user() {
  try {
    let obj = {
      name: name__elem.value,
      password: input__pass.value,
      phone: phone__elem.value,
      email: email__phone.value,
    };
    let up = await fetch(
      `https://dashbord-7bbff-default-rtdb.firebaseio.com/user/${userid}.json`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    get_user_show()
    overlay.style.display = "none";
    console.log("jkjk");

    showModalU.classList.remove("visible");
    showModalU.classList.add("invisible");

    showModalU.classList.add("opacity-0");
    showModalU.classList.remove("opacity-100");

    clear_input();
  } catch (error) {
    console.log(error);
  }
}

function clear_input() {
  email__phone.value = "";
  phone__elem.value = "";
  input__pass.value = "";
  name__elem.value = "";
}
