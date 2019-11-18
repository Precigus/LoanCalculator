"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var loan_1 = require("./loan");
var MortgageLoan = /** @class */ (function (_super) {
    __extends(MortgageLoan, _super);
    function MortgageLoan(amount, term, income, parentCount, childCount) {
        var _this = _super.call(this, amount, term) || this;
        _this.interest = 2;
        _this.income = income;
        _this.parentCount = parentCount;
        _this.childCount = childCount;
        return _this;
    }
    MortgageLoan.prototype.isTermValid = function () {
        return this.term < 360;
    };
    MortgageLoan.prototype.calculatePayments = function () {
        var salaryPercent = 21;
        var monthlyPayment = (this.amount + (1 + this.interest / 100)) / this.term +
            this.income / (this.childCount + this.parentCount);
        return monthlyPayment;
    };
    return MortgageLoan;
}(loan_1["default"]));
exports["default"] = MortgageLoan;
