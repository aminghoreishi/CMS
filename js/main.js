import "../module/darkmode.js";
import "../module/clickNav.js";
import "../module/formModdal.js";




let app = document.querySelector(".textHome");
let wrapper = document.querySelectorAll(".wraper");
let content = document.querySelectorAll(".content");
let arrow = document.querySelectorAll(".arrow");
let name__admin = document.querySelector(".name__admin");
let user__location = document.querySelector(".user__location");
let logout = document.querySelector(".logout");

var typewriter = new Typewriter(app, {
  loop: false,
});

typewriter
  .typeString("Hello")
  .pauseFor(2500)
  .deleteAll()
  .typeString("DashBoard")
  .pauseFor(2500)
  .start();

const ctx = document.querySelector("#mychart");

let chart_show = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ], //* محور ایکس
    datasets: [
      {
        label: "New Customers",
        data: [200, 300, 350, 400, 340, 500, 300, 400, 300, 500, 400, 200],
      },
      {
        label: "Loyal Customers",
        data: [300, 400, 350, 410, 300, 370, 290, 300, 400, 450, 400, 200],
      },
    ],
  },
});

wrapper.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.firstElementChild.lastElementChild);
    remove_item();
    
    item.firstElementChild.lastElementChild.classList.add("rotate-180");
    let i = item.lastElementChild.scrollHeight;
    item.lastElementChild.style.height = i + "px";
  });
});

function remove_item() {
  content.forEach((item) => {
    item.style.height = "0px";
  });
  arrow.forEach((item) => {
    item.classList.remove("rotate-180");
  });
}

window.addEventListener("load", () => {
  let get_loc = localStorage.getItem("lo");
  if (!get_loc) {
    location.href = "http://127.0.0.1:5500/pub/index.html";
    return;
  }
  get__item(JSON.parse(get_loc));
  get_user_show();
});

async function get__item(getLocal) {
  let get = await fetch(
    `https://dashbord-7bbff-default-rtdb.firebaseio.com/admins/${getLocal}.json`
  );

  let get_item = await get.json();

  name__admin.innerHTML = get_item.name;
  document.title = get_item.name
}

export async function get_user_show() {
  let get_user = await fetch(
    "https://dashbord-7bbff-default-rtdb.firebaseio.com/user.json"
  );

  let json_get = await get_user.json();

  user__location.innerHTML = "";

  Object.entries(json_get).forEach((item) => {
    user__location.insertAdjacentHTML(
      "beforeend",
      `
                                    <div
                                        class="flex items-center justify-between border-2 p-3 rounded-xl bg-gray-100/40 dark:bg-transparent  dark:border-gray-100/10">
                                        <div class="hidden sm:block">
                                            <svg class="size-5 dark:stroke-white stroke-black">
                                                <use href="#user"></use>
                                            </svg>
                                        </div>
                                        <div class="">

                                            <p class="text-[12px]  hidden sm:block text-black dark:text-white ">${item[1].name}</p>
                                        </div>
                                        <div class="w-[163px] overflow-hidden md:w-[163px]">

                                            <p class="text-[12px]   text-black dark:text-white ">${item[1].email}</p>
                                        </div>
                                        <div class="flex gap-x-2 sm:gap-x-4">
                                        <button
                                            class="flex items-center text-white  transition-all text-[10px] sm:text-sm bg-red-600 hover:bg-red-700 p-2 rounded-xl" onclick="openDeleteModel('${item[0]}')">
                                            <svg class="size-5">
                                                <use href="#delete"></use>
                                            </svg>
                                            
                                        </button>
                                        <button
                                            class="flex items-center  text-white transition-all  text-[10px] sm:text-sm bg-blue-600 hover:bg-blue-700 p-2 rounded-xl" onclick="editUser('${item[0]}')">
                                            <svg class="size-5">
                                                <use href="#edit"></use>
                                            </svg>
                                            
                                        </button>
                                        </div>
                                    </div>
      `
    );
  });
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
        get_user_show();
      });
    }
  });
};

logout.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/pub/index.html";
  localStorage.removeItem("lo");
});
