import Books from '../models/Books.js';

export const createBooks = async (req, res) => {
    try {
        const newBooks = new Books(req.body);
        await newBooks.save();
        res.status(201).json(newBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBooks = async (req, res) => {
    try {
        const { isbn, title, author } = req.query;

        const filter = {};
        if (isbn) filter.isbn = isbn;
        if (title) filter.title = new RegExp(title, 'i'); 
        if (author) filter.author = new RegExp(author, 'i');

        const books = await Books.find(filter);
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
}

export const getBookById = async (req, res) => {
    try {
        const book = await Books.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getGenreStats = async (req, res) => {
    try {
        const totalBooks = await Books.countDocuments(); // Compte le nombre total de livres

        const stats = await Books.aggregate([ // aggregate permet de faire des opérations avancées sur les données
        { $unwind: "$genre" },  // Permet de décomposer le tableau de genres
        {
            $group: { // Regroupe par genre
                _id: "$genre",
                count: { $sum: 1 }
            }
        },
        {
            $project: { // Formate la sortie
                genre: "$_id",
                count: 1,
                percentage: {
                    $round: [{ $multiply: [{ $divide: ["$count", totalBooks] }, 100] }, 2]
                },
                _id: 0
            }
        }
        ]);

        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateBooks = async (req, res) => {
    try {
        const updatedBooks = await Books.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedBooks) return res.status(404).json({ message: "Book not found" });
        res.json(updatedBooks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteBooks = async (req, res) => {
    try {
        const deleted = await Books.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}