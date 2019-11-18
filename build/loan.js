"use strict";
exports.__esModule = true;
var Loan = /** @class */ (function () {
    function Loan(amount, term, interest) {
        this.amount = amount;
        this.term = term;
    }
    Loan.prototype.isTermValid = function () {
        return this.term < 12;
    };
    Loan.prototype.calculatePayments = function () {
        var monthlyPayment = (this.amount * (1 + this.interest / 100)) / this.term;
        return monthlyPayment;
    };
    return Loan;
}());
exports["default"] = Loan;
