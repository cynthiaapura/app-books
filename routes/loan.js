import express from 'express';
import {
  createLoan,
  getAllLoans,
  updateReturnDate
} from '../controllers/loanController.js';

const router = express.Router();

router.post('/', createLoan);
router.get('/', getAllLoans);
router.patch('/:id/return', updateReturnDate);

export default router;
