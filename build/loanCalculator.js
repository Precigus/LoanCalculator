"use strict";
exports.__esModule = true;
console.log('pasiektas');
var EventListeners = /** @class */ (function () {
    function EventListeners() {
    }
    EventListeners.prototype.addEventListeners = function () { };
    return EventListeners;
}());
exports["default"] = EventListeners;
function changeLocation(page) {
    switch (page) {
        case 'quick':
            window.location.href = '/quickLoan.html';
            break;
    }
}
exports.changeLocation = changeLocation;
function addEventListeners() {
    var quickLoanButton = document.getElementById('quickLoan');
    var mortgageLoanButton = document.getElementById('mortgageLoan');
    var personalLoanButton = document.getElementById('personalLoan');
    quickLoanButton.addEventListener('onclick', function () {
        changeLocation('quick');
    });
}
exports.addEventListeners = addEventListeners;
var listeners = new EventListeners();
window.addEventListener('load', listeners.addEventListeners);
