import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 200
  },
  subtitles: {
    type: String,
    required: false,
    trim: true,
    maxlength: 200
  },
  author: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  price: {
    type: Number,
    required: false,
    min: 0
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^(\d{9}[\dXx]|(\d{1,5}-\d{1,7}-\d{1,7}-[\dXx])|(97[89]-\d{1,5}-\d{1,7}-\d{1,7}-\d{1})|97[89]\d{10})$/
  },
  editor: {
    type: String,
    required: false,
    trim: true,
    maxlength: 100
  },
  resume: {
    type: String,
    required: false,
    trim: true,
    maxlength: 2000
  },
  image: {
    type: String,
    required: false,
    trim: true,
    match: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i
  },
  genre: {
    type: [String],
    required: false,
    validate: {
      validator: (arr) => arr.length > 0,
      message: "Un livre doit avoir au moins un genre"
    }
  },
  language: {
    type: String,
    required: false,
    trim: true
  },
  publicationDate: {
    type: Date,
    required: false
  },
  tomeNumber: {
    type: Number,
    min: 1,
    required: false
  },
  weight: {
    type: Number,
    min: 0,
    required: false
  },
  format: {
    type: String,
    trim: true,
    maxlength: 50,
    required: false
  },
  numberPages: {
    type: Number,
    required: false,
    min: 1
  }
}, { timestamps: true });

BookSchema.index(
  { title: "text", author: "text", resume: "text" },
  { weights: { title: 5, author: 3, resume: 1 } }
);

const Book = mongoose.model("Book", BookSchema);

export default Book;
