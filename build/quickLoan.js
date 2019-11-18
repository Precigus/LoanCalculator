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
var QuickLoan = /** @class */ (function (_super) {
    __extends(QuickLoan, _super);
    function QuickLoan(amount, term) {
        var _this = _super.call(this, amount, term) || this;
        _this.interest = 20;
        return _this;
    }
    QuickLoan.prototype.isTermValid = function () {
        return this.term < 24;
    };
    return QuickLoan;
}(loan_1["default"]));
exports["default"] = QuickLoan;
