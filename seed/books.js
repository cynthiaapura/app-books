import mongoose from "mongoose";
import Book from "../models/Books.js";
import dotenv from "dotenv";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const seedBooks = [
      {
        title: "Manger ses mauvaises herbes",
        subtitles: "Du jardin a l'assiette",
        author: "Susanne Hansch, Elke Schwarser",
        price: 16.90,
        isbn: "978-2-37922-160-6",
        resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        editor: "Ulmer",
        image: "",
        genre: ["Cuisine", "Bien-être"],
        numberPages: 128,
        language: "french",
        publicationDate: new Date("2021-03-01"),
        tomeNumber: "",
        weight: 350,
        format: "Broché"
      },
      {
        title: "Le donjon de Naheulbeuk",
        subtitles: "Le conseil de Suak",
        author: "John Lang",
        price: 8.00,
        isbn: "978-2-290-04154-3",
        resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        editor: "J'ai Lu",
        image: "",
        genre: ["Jeunesse", "Fantasy"],
        numberPages: 462,
        language: "french",
        publicationDate: new Date("2012-09-10"),
        tomeNumber: 3,
        weight: 650,
        format: "Poche"
      },
      {
        title: "L'essentiel du vocabulaire allemand",
        subtitles: "",
        tome: 1,
        author: "Albert Findling",
        price: 13.00,
        isbn: "2-7298-4921-1",
        resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        editor: "Ellipses",
        image: "",
        genre: "education",
        numberPages: 160,
        languages: ["french", "german"],
        publicationDate: new Date("2000-03-01"),
        tomeNumber: "",
        weight: 275,
        format: "Royal"
      }
    ];

    await Book.deleteMany({});
    await Book.insertMany(seedBooks);

    console.log("📚 Base de données initialisée avec succès !");
  } catch (error) {
    console.error("Erreur lors du seed :", error);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
