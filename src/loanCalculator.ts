console.log('pasiektas');
export default class EventListeners {
	changeLocation(page: string): void {
		switch (page) {
			case 'quick':
				window.location.href = '/quickLoan';
				break;
		}
	}

	addEventListeners(): void {
		let quickLoanButton = document.getElementById('quickLoan');
		let mortgageLoanButton = document.getElementById('mortgageLoan');
		let personalLoanButton = document.getElementById('personalLoan');

		quickLoanButton.addEventListener('onclick', function() {
			this.changeLocation('quick');
		});
	}
}

let listeners = new EventListeners();
window.addEventListener('load', listeners.addEventListeners);
