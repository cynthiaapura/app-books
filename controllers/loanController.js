import Loan from '../models/Loan.js';
import Book from '../models/Books.js';

const formatDate = (date) => {
  if (!date) return null;
  return new Date(date).toLocaleDateString('fr-FR');
};

export const createLoan = async (req, res) => {
  try {
    const { user, title, loanDuration } = req.body;

    const book = await Book.findOne({ title: new RegExp(title, 'i') });
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Livre introuvable avec ce titre."
      });
    }

    const existingLoan = await Loan.findOne({ 
      book: book._id, 
      returnDate: { $exists: false } 
    });

    if (existingLoan) {
      return res.status(400).json({
        success: false,
        message: "Ce livre est actuellement emprunté et n'a pas encore été retourné."
      });
    }

    const loan = new Loan({
      user,
      book: book._id,
      loanDuration
    });

    await loan.save();

    res.status(201).json({
      success: true,
      message: "Emprunt enregistré avec succès.",
      data: {
        id: loan._id,
        user: loan.user,
        book: {
          title: book.title,
          isbn: book.isbn
        },
        loanDate: formatDate(loan.loanDate),
        loanDuration: loan.loanDuration,
        returnDate: formatDate(loan.returnDate)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la création de l'emprunt.",
      error: error.message
    });
  }
};


export const getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find().populate('book', 'title isbn');

    const formattedLoans = loans.map(loan => ({
      id: loan._id,
      user: loan.user,
      book: {
        title: loan.book.title,
        isbn: loan.book.isbn
      },
      loanDate: formatDate(loan.loanDate),
      loanDuration: loan.loanDuration,
      returnDate: formatDate(loan.returnDate)
    }));

    res.status(200).json({
      success: true,
      count: loans.length,
      message: "Liste des emprunts récupérée avec succès.",
      data: formattedLoans
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur serveur lors de la récupération des emprunts.",
      error: error.message
    });
  }
};

export const updateReturnDate = async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id).populate('book', 'title isbn');
    if (!loan) {
      return res.status(404).json({
        success: false,
        message: "Emprunt non trouvé."
      });
    }

    loan.returnDate = new Date();
    await loan.save();

    res.status(200).json({
      success: true,
      message: "Date de retour enregistrée.",
      data: {
        id: loan._id,
        user: loan.user,
        book: {
          title: loan.book.title,
          isbn: loan.book.isbn
        },
        loanDate: formatDate(loan.loanDate),
        loanDuration: loan.loanDuration,
        returnDate: formatDate(loan.returnDate)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la mise à jour de l'emprunt.",
      error: error.message
    });
  }
};
