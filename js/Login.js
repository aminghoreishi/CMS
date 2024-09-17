let form = document.querySelector("form"),
  name__elem = document.querySelector(".name__elem"),
  pass__elem = document.querySelector(".pass__elem"),
  ph__elem = document.querySelector(".ph__elem"),
  button = document.querySelector("button"),
  eye__open = document.querySelector(".eye__open"),
  eye__close = document.querySelector(".eye__close");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  button.innerHTML = "Loading...";

  get_item();
});

let is_pass = null;

let admin__id = null;

let is_name = null

name__elem.addEventListener("keyup" , () => {
  let regex__item = /^\w{3,8}$/;
  is_name = !regex__item.test(name__elem.value);
  if (!is_name) {
    name__elem.classList.add("border-gray-600/30");
    name__elem.classList.remove("border-red-600");
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    button.classList.remove("cursor-pointer");
    name__elem.classList.remove("border-gray-600/30");
    name__elem.classList.add("border-red-600");
    button.classList.add("cursor-not-allowed");
  }
  valid_input();
})
pass__elem.addEventListener("keyup", () => {
  let regex_pass_check = /^\w{8,12}$/;
  is_pass = !regex_pass_check.test(pass__elem.value);

  if (!is_pass) {
    pass__elem.classList.add("border-gray-200/25");
    pass__elem.classList.remove("border-red-600");
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    pass__elem.classList.remove("border-gray-200/25");
    pass__elem.classList.add("border-red-600");
    button.classList.add("cursor-not-allowed");
  }
  valid_input();
});
let is__phone = null;
ph__elem.addEventListener("keyup", () => {
  let regex__item = /^09(0[1-9]|1[0-9]|2[0-3]|3[0-9]|9[0-4])\d{7}$/;
  is__phone = !regex__item.test(ph__elem.value);
  if (!is__phone) {
    ph__elem.classList.add("border-gray-200/25");
    ph__elem.classList.remove("border-red-600");
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    button.classList.remove("cursor-pointer");
    ph__elem.classList.remove("border-gray-200/25");
    ph__elem.classList.add("border-red-600");
    button.classList.add("cursor-not-allowed");
  }
  valid_input();
});
async function get_item() {
  let get_item = await fetch(
    "https://dashbord-7bbff-default-rtdb.firebaseio.com/admins.json"
  );
  let await_fetch = await get_item.json();
  Object.values(await_fetch).some((item) => {
    if (
      item.phone == ph__elem.value &&
      item.password == pass__elem.value &&
      item.name == name__elem.value
    ) {
      admin__id = Object.keys(await_fetch)[0];
      localStorage.setItem("lo", JSON.stringify(admin__id));
      location.href = "http://127.0.0.1:5500/pub/main_page.html";
    } else {
      Swal.fire({
        title: "Access Denied",
        icon: "error",
        background: "#000",
        color: "#fff",
      });
    }
    button.innerHTML = "Login";
  });
}
function valid_input() {
  if (!is_pass && !is__phone && !is_name) {
    button.disabled = false;
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  } else {
    button.disabled = true;
    button.classList.add("cursor-not-allowed");
    button.classList.remove("cursor-pointer");
  }
}

eye__open.addEventListener("click", () => {
  pass__elem.setAttribute("type", "text");
  eye__open.classList.add("hidden");
  eye__close.classList.remove("hidden");
});

eye__close.addEventListener("click", () => {
  pass__elem.setAttribute("type", "password");
  eye__open.classList.remove("hidden");
  eye__close.classList.add("hidden");
});
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 10,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ['#F3E5F5' , '#424242' , '#283593' , '#F4511E']
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 80,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 40,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);