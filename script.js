// Script for chart.
var ctx = document.getElementById("myChart");
const monthData = [
  27482.0, 27450.0, 27300.0, 26482.0, 26882.0, 26602.0, 26782.0, 26382.0,
  26582.0, 27582.0, 27682.0, 27632.0, 27612.0, 27622.0, 28182.0, 28282.0,
  28382.0, 28482.0, 28582.0, 28682.0, 28612.0, 28782.0, 27636.0, 27602.0,
  27652.0, 28572.0, 28662.0, 28689.0, 28790.0, 28794.0, 28792.0,
];
const weekData = monthData.slice(0, 7);
let data = monthData;

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: data.map((item) => {
      return data.indexOf(item) + 1;
    }),
    datasets: [
      {
        label: "Bitcoin",
        data: data,
        backgroundColor: "#99CAF4",
        borderColor: "#99CAF4",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return "$" + value;
          },
        },
      },
    },
  },
  actions: {
    name: "Remove Dataset",
    handler(chart) {
      chart.data.datasets.pop();
      chart.update();
    },
  },
});

const marketArr = [
  {
    name: "Band Protocol",
    subName: "Band",
    img: "./assets/band.png",
    price: 2.42,
    change: 13.38,
  },
  {
    name: "VeChain",
    subName: "VET",
    img: "./assets/vechain.png",
    price: 7.48,
    change: 11.19,
  },
  {
    name: "Aave",
    subName: "AAVE",
    img: "./assets/aave.png",
    price: 0.0184,
    change: 7.57,
  },
  {
    name: "Waves",
    subName: "WAVES",
    img: "./assets/waves.png",
    price: 30.68,
    change: 6.8,
  },
];

const replaceValues = (array) => {
  document.getElementById("market-top-img").src = array[3].img;
  document.getElementById("market-lower-img").src = array[2].img;
  document.getElementById("market-mid-img").src = array[1].img;
  document.getElementById("market-lowest-img").innerHTML = array[0].img;
  document.getElementById("market-top-name").innerHTML = array[3].name;
  document.getElementById("market-lower-name").innerHTML = array[2].name;
  document.getElementById("market-mid-name").innerHTML = array[1].name;
  document.getElementById("market-lowest-name").innerHTML = array[0].name;
  document.getElementById("market-top-subName").innerHTML = array[3].subName;
  array;
  document.getElementById("market-lower-subName").innerHTML = array[2].subName;
  document.getElementById("market-mid-subName").innerHTML = array[1].subName;
  document.getElementById("market-lowest-subName").innerHTML = array[0].subName;
  document.getElementById("market-top-change").innerHTML =
    "+" + array[3].change + "%";
  document.getElementById("market-lower-change").innerHTML =
    "+" + array[2].change + "%";
  document.getElementById("market-mid-change").innerHTML =
    "+" + array[1].change + "%";
  document.getElementById("market-lowest-change").innerHTML =
    "+" + array[0].change + "%";
  document.getElementById("market-top-price").innerHTML = "$" + array[3].price;
  document.getElementById("market-lower-price").innerHTML =
    "$" + array[2].price;
  document.getElementById("market-mid-price").innerHTML = "$" + array[1].price;
  document.getElementById("market-lowest-price").innerHTML =
    "$" + array[0].price;
};
const sortTopPrice = () => {
  replaceValues(
    marketArr.sort(function (a, b) {
      return a.price - b.price;
    })
  );
};
const sortBottomPrice = () => {
  replaceValues(
    marketArr.sort(function (a, b) {
      return b.price - a.price;
    })
  );
};
const sortBottomGain = () => {
  replaceValues(
    marketArr.sort(function (a, b) {
      return b.change - a.change;
    })
  );
};
