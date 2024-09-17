let darkmode = document.querySelectorAll(".darkmode"),
  svgChange = document.querySelector(".svgChange");

darkmode.forEach((item) => {
  item.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.className.includes("dark")) {
      localStorage.setItem("th", "dark");
      darkmode.innerHTML = "Light Mode";
      theme_dark_swal();
    } else {
      localStorage.setItem("th", "light");
      darkmode.innerHTML = "Dark Mode";
    }
  });
});

window.addEventListener("load", () => {
  let get_item = localStorage.getItem("th");

  if (get_item === "dark") {
    document.documentElement.classList.add("dark");
    darkmode.innerHTML = "Light Mode";
    theme_dark_swal();
  }
});

function theme_dark_swal() {
  let link = document.createElement("link");

  (link.rel = "stylesheet"),
    (link.href =
      "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@5.0.18/dark.min.css");

  document.documentElement.appendChild(link);
}

console.log(document.documentElement);
