"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import uniqolor from "uniqolor";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// useEffect(() => {
//   (async function () {
//     const books = await fetchBooks();

//     //
//     // Create a Set to store unique genres
//     const genresSet = new Set();

//     // Iterate over the books and add each genre to the Set
//     books.forEach((book) => {
//       genresSet.add(book.genre);
//     });

//     // Convert the Set to an array
//     const genres = Array.from(genresSet);

//     console.log("Genres:", genres);
//   })();
// }, []);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [20, 30, 70, 50, 30, 60, 40],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function LineChart() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await fetch(`${process.env.SITE_URL}/api/books`);
      const books = await res.json();
      setBooks(books);
      return books;
    } catch (e) {
      console.log(e);
    }
  };

  return <Line options={options} data={data} />;
}
