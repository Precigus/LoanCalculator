import QuickLoan from './entities/quickLoan';

let calcButton = document.getElementsByClassName('calcButton')[0];
function CalculatePayments(): void {
	let amountEntry = parseInt(
		(<HTMLInputElement>document.getElementsByClassName('amount')[0]).value
	);
	if (!amountEntry) {
		amountEntry = 0;
	}
	let termEntry = parseInt(
		(<HTMLInputElement>document.getElementsByClassName('term')[0]).value
	);
	if (!termEntry) {
		termEntry = 0;
	}
	let paymentOutput = <HTMLInputElement>(
		document.getElementsByClassName('monthlyPayment')[0]
	);

	let quickLoan = new QuickLoan(amountEntry, termEntry);
	if (!quickLoan.isTermValid()) {
		paymentOutput.value = '0';
	} else {
		let payments = quickLoan.calculatePayments();
		paymentOutput.value = payments.toString();
	}
}
calcButton.addEventListener('click', CalculatePayments);
