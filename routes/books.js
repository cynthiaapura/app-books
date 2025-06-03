import express from 'express';
import { 
    createBooks,
    getBooks,
    getBookById,
    updateBooks,
    deleteBooks
} from '../controllers/booksController.js';

const router = express.Router();

router.get('/', getBooks);
router.post('/', createBooks);
router.get('/:id', getBookById);
router.put('/:id', updateBooks);
router.delete('/:id', deleteBooks);


router.get('/', async (req, res) => {
    try {
        const { isbn, title, author } = req.query;

        const filter = {};
        if (isbn) filter.isbn = isbn;
        if (title) filter.title = new RegExp(title, 'i'); 
        if (author) filter.author = new RegExp(author, 'i');

        const books = await Book.find(filter);
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
});

export default router;