import Link from "next/link";
import React from "react";

const fetchBooks = async () => {
  try {
    const books = await fetch(`${process.env.SITE_URL}/api/books`, {
      cache: "no-cache",
    });
    return await books.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Products() {
  const books = await fetchBooks();
  let count = 0;

  return (
    <div className="">
      <Link
        href="/books/add"
        className="btn rounded-md bg-slate-500 text-white hover:bg-slate-400"
      >
        add
      </Link>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>ISBN no</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr>
                <th>{++count}</th>
                <td>{book.name}</td>
                <td>{book.isbn}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.availability.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
