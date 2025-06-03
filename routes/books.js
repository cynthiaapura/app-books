import express from 'express';
import { 
    createBooks,
    getBooks,
    getBookById,
    getGenreStats,
    updateBooks,
    deleteBooks
} from '../controllers/booksController.js';

const router = express.Router();

router.get('/', getBooks);
router.post('/', createBooks);
router.get('/:id', getBookById);
router.get('/stats/genres', getGenreStats);
router.put('/:id', updateBooks);
router.delete('/:id', deleteBooks);

export default router;