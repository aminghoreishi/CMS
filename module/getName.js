let name__admin = document.querySelector(".name__admin2");
let logout = document.querySelector(".logout");
let name_input = document.querySelector("#name_input");
let pass_input = document.querySelector("#pass_input");
let email_input = document.querySelector("#email_input");
let ph_input = document.querySelector("#ph_input");

let global_id = null;

window.addEventListener("load", () => {
  let get_loc = localStorage.getItem("lo");
  global_id = JSON.parse(get_loc);
  if (!get_loc) {
    location.href = "http://127.0.0.1:5500/pub/Login.html";
    return;
  }
  get__item(JSON.parse(get_loc));
});

export async function get__item(getLocal) {
  let get = await fetch(
    `https://dashbord-7bbff-default-rtdb.firebaseio.com/admins/${getLocal}.json`
  );

  let get_item = await get.json();

  name__admin.innerHTML = get_item.name;
  name_input.value = get_item.name;
  pass_input.value = get_item.password;
  email_input.value = get_item.email;
  ph_input.value = get_item.phone;
  document.title = get_item.name
  
}

logout.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/pub/Login.html";
  localStorage.removeItem("lo");
});

export {global_id};
