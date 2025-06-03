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
      },
      {
        title: "Harry Potter à l'école des sorciers",
        subtitles: "",
        author: "J.K. Rowling",
        price: 8.90,
        isbn: "978-2-07-064302-8",
        resume: "Premier tome de la saga, où Harry découvre qu'il est un sorcier.",
        editor: "Gallimard Jeunesse",
        image: "",
        genre: ["Fantasy", "Jeunesse"],
        numberPages: 320,
        languages: ["french", "english"],
        publicationDate: new Date("1998-10-09"),
        tomeNumber: 1,
        weight: 380,
        format: "Broché"
      },
      {
        title: "Harry Potter et la Chambre des Secrets",
        subtitles: "",
        author: "J.K. Rowling",
        price: 9.20,
        isbn: "978-2-07-064303-5",
        resume: "Deuxième année à Poudlard, marquée par l'ouverture de la Chambre des Secrets.",
        editor: "Gallimard Jeunesse",
        image: "",
        genre: ["Fantasy", "Jeunesse"],
        numberPages: 368,
        languages: ["french", "english"],
        publicationDate: new Date("1999-03-04"),
        tomeNumber: 2,
        weight: 400,
        format: "Broché"
      },
      {
        title: "Harry Potter et le Prisonnier d'Azkaban",
        subtitles: "",
        author: "J.K. Rowling",
        price: 9.90,
        isbn: "978-2-07-064304-2",
        resume: "Harry fait face à Sirius Black, évadé d'Azkaban.",
        editor: "Gallimard Jeunesse",
        image: "",
        genre: ["Fantasy", "Jeunesse"],
        numberPages: 448,
        languages: ["french", "english"],
        publicationDate: new Date("1999-10-07"),
        tomeNumber: 3,
        weight: 430,
        format: "Broché"
      },
      {
        title: "Harry Potter et la Coupe de Feu",
        subtitles: "",
        author: "J.K. Rowling",
        price: 10.50,
        isbn: "978-2-07-064305-9",
        resume: "Harry participe au Tournoi des Trois Sorciers.",
        editor: "Gallimard Jeunesse",
        image: "",
        genre: ["Fantasy", "Jeunesse"],
        numberPages: 736,
        languages: ["french", "english"],
        publicationDate: new Date("2000-10-26"),
        tomeNumber: 4,
        weight: 620,
        format: "Broché"
      },
      {
        title: "Harry Potter et l'Ordre du Phénix",
        subtitles: "",
        author: "J.K. Rowling",
        price: 11.90,
        isbn: "978-2-07-064306-6",
        resume: "Harry affronte le ministère de la Magie et découvre l'Ordre du Phénix.",
        editor: "Gallimard Jeunesse",
        image: "",
        genre: ["Fantasy", "Jeunesse"],
        numberPages: 976,
        languages: ["french", "english"],
        publicationDate: new Date("2003-12-03"),
        tomeNumber: 5,
        weight: 780,
        format: "Broché"
      },
      {
        title: "Harry Potter et le Prince de Sang-Mêlé",
        subtitles: "",
        author: "J.K. Rowling",
        price: 10.80,
        isbn: "978-2-07-064307-3",
        resume: "Harry en apprend plus sur Voldemort et découvre un ancien manuel.",
        editor: "Gallimard Jeunesse",
        image: "",
        genre: ["Fantasy", "Jeunesse"],
        numberPages: 656,
        languages: ["french", "english"],
        publicationDate: new Date("2005-10-01"),
        tomeNumber: 6,
        weight: 590,
        format: "Broché"
      },
      {
        title: "Harry Potter et les Reliques de la Mort",
        subtitles: "",
        author: "J.K. Rowling",
        price: 12.50,
        isbn: "978-2-07-064308-0",
        resume: "Dernier tome de la saga, Harry affronte Voldemort une dernière fois.",
        editor: "Gallimard Jeunesse",
        image: "",
        genre: ["Fantasy", "Jeunesse"],
        numberPages: 832,
        languages: ["french", "english"],
        publicationDate: new Date("2007-10-26"),
        tomeNumber: 7,
        weight: 700,
        format: "Broché"
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
