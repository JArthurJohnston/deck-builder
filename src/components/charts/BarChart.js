import Chart from "chart.js/auto";

const COLORLESS_COLOR = "rgba(10,20,30,0.3)";
const BORDER_COLOR = "rgba(10,20,30,1)";
const BLUE_COLOR = "rgba(50,150,200,0.3)"

export function build(svgId, cmcData) {
  const values = cmcData.map((e) => e.value);
  const labels = cmcData.map((e) => e.name);

  const ctx = document.getElementById(svgId).getContext("2d");

  //bar chart data
  const data = {
    labels,
    datasets: [
      {
        label: "Mana Value Curve",
        data: values,
        backgroundColor: [
          BLUE_COLOR,
          BLUE_COLOR,
          BLUE_COLOR,
          BLUE_COLOR,
          BLUE_COLOR,
        ],
        borderColor: [
          BORDER_COLOR,
          BORDER_COLOR,
          BORDER_COLOR,
          BORDER_COLOR,
          BORDER_COLOR,
        ],
        borderWidth: 1,
      },
    ],
  };

  //options
  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
          },
        },
      ],
    },
  };

  //create Chart class object
  new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
}
