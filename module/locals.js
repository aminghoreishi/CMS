import { show_user } from "../js/user.js";

let name__admin = document.querySelector('.name__admin')
let logout = document.querySelector('.logout')

window.addEventListener("load", () => {
  let get_loc = localStorage.getItem("lo");
  if (!get_loc) {
    location.href = "http://127.0.0.1:5500/pub/index.html";
    return;
  }
  get__item(JSON.parse(get_loc));
});
async function get__item(getLocal) {
  let get = await fetch(
    `https://dashbord-7bbff-default-rtdb.firebaseio.com/admins/${getLocal}.json`
  );

  let get_item = await get.json();

  name__admin.innerHTML = get_item.name;
}

window.openDeleteModel = function (item) {
  Swal.fire({
    title: "Are you want to delete?",
    showCancelButton: true,
    confirmButtonText: "Delete",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(
        `https://dashbord-7bbff-default-rtdb.firebaseio.com/user/${item}.json`,
        {
          method: "DELETE",
        }
      ).then((res) => {
        show_user();
      });
    }
  });
};

logout.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/pub/index.html";
  localStorage.removeItem("lo");
});

