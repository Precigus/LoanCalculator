const path = require('path');

export function changeLocation(page: string): void {
	switch (page) {
		case 'quick':
			window.location.href = 'quickLoan.html';
			break;
		case 'mortgage':
			window.location.href = 'mortgageLoan.html';
			break;
		case 'personal':
			window.location.href = 'personalLoan.html';
			break;
		case '*':
			window.location.href = 'index.html';
			break;
	}
}
export function addEventListeners(): void {
	let quickLoanButton = document.getElementById('quickLoan');
	let mortgageLoanButton = document.getElementById('mortgageLoan');
	let personalLoanButton = document.getElementById('personalLoan');

	quickLoanButton.addEventListener('click', function() {
		changeLocation('quick');
	});
	mortgageLoanButton.addEventListener('click', function() {
		changeLocation('mortgage');
	});
	personalLoanButton.addEventListener('click', function() {
		changeLocation('personal');
	});
}

window.addEventListener('load', addEventListeners);
