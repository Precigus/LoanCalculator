import MortgageLoan from './entities/mortgageLoan';

let calcButton = document.getElementsByClassName('calcButton')[0];

function calculatePayments(): void {
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

	let incomeEntry = parseInt(
		(<HTMLInputElement>document.getElementsByClassName('income')[0]).value
	);
	if (!incomeEntry) {
		incomeEntry = 0;
	}

	let childrenEntry = parseInt(
		(<HTMLInputElement>document.getElementsByClassName('childCount')[0]).value
	);
	if (!childrenEntry) {
		childrenEntry = 0;
	}

	let parentsEntry = parseInt(
		(<HTMLInputElement>document.getElementsByClassName('parentCount')[0]).value
	);
	if (!parentsEntry) {
		parentsEntry = 0;
	}

	let paymentOutput = <HTMLInputElement>(
		document.getElementsByClassName('monthlyPayment')[0]
	);

	let mortgageLoan = new MortgageLoan(
		amountEntry,
		termEntry,
		incomeEntry,
		parentsEntry,
		childrenEntry
	);

	if (!mortgageLoan.isTermValid()) {
		paymentOutput.value = '0';
		console.log(mortgageLoan.isTermValid());
	} else {
		let payments = mortgageLoan.calculatePayments().toFixed(2);
		paymentOutput.value = payments.toString();
	}
}

calcButton.addEventListener('click', calculatePayments);
