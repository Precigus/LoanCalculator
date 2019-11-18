"use strict";
exports.__esModule = true;
console.log('pasiektas');
var EventListeners = /** @class */ (function () {
    function EventListeners() {
    }
    EventListeners.prototype.changeLocation = function (page) {
        switch (page) {
            case 'quick':
                window.location.href = '/quickLoan';
                break;
        }
    };
    EventListeners.prototype.addEventListeners = function () {
        var quickLoanButton = document.getElementById('quickLoan');
        var mortgageLoanButton = document.getElementById('mortgageLoan');
        var personalLoanButton = document.getElementById('personalLoan');
        quickLoanButton.addEventListener('onclick', function () {
            this.changeLocation('quick');
        });
    };
    return EventListeners;
}());
exports["default"] = EventListeners;
var listeners = new EventListeners();
window.addEventListener('load', listeners.addEventListeners);
