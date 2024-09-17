import "../module/darkmode.js";
import "../module/getName.js";
import "../module/typeWtite.js";
import "../module/clickNav.js";

const ctx = document.querySelector("#mychart4");
const ctx2 = document.querySelector("#mychart2");
const ctx3 = document.querySelector("#mychart3");

let chart_show2 = new Chart(ctx2, {
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
    ],
    datasets: [
      {
        label: "New Customers",
        data: [200, 300, 350, 400, 500, 300, 200, 400, 450, 500, 300, 160],
      },
    ],
  },
});
let chart_show4 = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"], //* محور ایکس
    datasets: [
      {
        label: "New Customers",
        data: [200, 300, 350, 400],
      },
    ],
  },
});

let chart_show3 = new Chart(ctx3, {
  type: "bar",
  backgroundColor: ["#7CB342", "#7CB342", "#AD1457", "#616161"],
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
    ],
    datasets: [
      {
        label:"New Customer",
        data: [200, 300, 350, 400, 600, 400, 200, 100, 500, 490, 300, 290],
        backgroundColor: ["#7CB342", "#7CB342", "#AD1457", "#616161","#0277BD","#FF8F00","#AD1457","#9E9D24","#4E342E","#283593","#9E9D24"],
      },
    ],
 
  },
});
