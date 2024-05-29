const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {
            label: "# of Votes",
            data: [2, 2, 2, 2, 1, 1, 0, 0, 2, 3, 0, 1, 0, 1, 2, 0, 1, 1, 2, 3, 1, 1, 1, 1, 3, 4, 2, 1, 3, 4, 0, 2, 2, 1, 0, 3, 2,
                    2, 3, 4, 2, 0, 1, 4, 2, 4, 2, 4, 4, 3, 1, 2, 3, 3, 0, 3, 1, 3, 2, 1, 1, 6, 0, 4, 2, 2, 0, 1, 2, 1, 1, 1, 0, 4,
                    3, 2, 4, 1, 1, 3, 1, 3, 2, 2, 2, 1, 2, 2, 2, 1, 6, 0, 1, 0, 0, 1, 3, 3, 2, 2],
            borderWidth: 1,
        },
    ],
},
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
