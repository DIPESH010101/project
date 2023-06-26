import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

const handleSubmit = async (data) => {
  "use server";

  const formData = {
    name: data.get("book-name"),
    isbn: data.get("isbn-no"),
    genre: data.get("genre"),
    author: data.get("author"),
    publisher: data.get("publisher"),
    publishedDate: data.get("publishedDate"),
    availability: data.get("radio"),
  };

  try {
    const res = await fetch(`${process.env.SITE_URl}/api/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    revalidatePath("/books");
    redirect(`${process.env.SITE_URL}/books`);
  } catch (e) {
    console.log(e);
  }
};

export default async function page() {
  const currentDate = new Date(Date.now());
  const formattedDate = currentDate.toISOString().split("T")[0];

  return (
    <div className="w-1/2 mx-auto mt-5">
      <form action={handleSubmit} method="post">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add Books
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                for="book-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="book-name"
                  id="book-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="isbn-no"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Isbn no
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="isbn-no"
                  id="isbn-no"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="author"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Author
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="author"
                  id="author"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="publisher"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Publisher
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="publisher"
                  id="publisher"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="published date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Published Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="publishedDate"
                  id="publishedDate"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={formattedDate}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="genre"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Genre
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="genre"
                  id="genre"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="available"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Available
              </label>
              <div className="mt-2">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">True</span>
                    <input
                      type="radio"
                      name="radio"
                      className="radio checked:bg-blue-500"
                      defaultCheckedx
                      defaultValue={"true"}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">False</span>
                    <input
                      type="radio"
                      name="radio"
                      className="radio checked:bg-red-500"
                      defaultValue={"false"}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs border-none rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 w-fit mx-5">
            <button
              type="submit"
              className="btn rounded-md bg-slate-500 text-white hover:bg-slate-400"
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
