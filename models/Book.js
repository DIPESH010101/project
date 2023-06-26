import { models, model, Schema } from "mongoose";

const BookSchema = new Schema({
  name: {
    type: String,
    required: "true",
  },
  isbn: {
    type: String,
    required: "true",
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
  genre: { type: [String], required: true },
  availability: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
  },
});

const Book = models.books || model("books", BookSchema);
export default Book;
