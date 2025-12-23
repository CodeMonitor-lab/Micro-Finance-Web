const { Loan } = require("../models");

exports.createLoan = async (req, res, next) => {
  try {
    const loan = await Loan.create({
      user: req.body.user,
      amount: req.body.amount,
      interestRate: req.body.interestRate,
      tenureMonths: req.body.tenureMonths,
    });

    res.status(201).json({
      status: "success",
      data: loan,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllLoans = async (req, res, next) => {
  try {
    const loans = await Loan.find().populate("user", "name email");

    res.json({
      status: "success",
      results: loans.length,
      data: loans,
    });
  } catch (error) {
    next(error);
  }
};
