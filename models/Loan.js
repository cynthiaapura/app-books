import mongoose from "mongoose";

const LoanSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    trim: true
  },
  // clé etrangère vers la collection Books
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  loanDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  loanDuration: {
    type: Number,
    required: true,
    min: 1
  },
  returnDate: {
    type: Date,
    required: false
  }
}, { timestamps: false });

const Loan = mongoose.model("Loan", LoanSchema);
export default Loan;
