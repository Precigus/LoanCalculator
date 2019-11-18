import Loan from './loan';

export default class MortgageLoan extends Loan {
	income: number;
	parentCount: number;
	childCount: number;

	constructor(
		amount: number,
		term: number,
		income: number,
		parentCount: number,
		childCount: number
	) {
		super(amount, term);

		this.interest = 2;
		this.income = income;
		this.parentCount = parentCount;
		this.childCount = childCount;
	}

	isTermValid() {
		return this.term < 360;
	}

	calculatePayments(): number {
		const salaryPercent = 21;

		let monthlyPayment =
			(this.amount + (1 + this.interest / 100)) / this.term +
			this.income / (this.childCount + this.parentCount);

		return monthlyPayment;
	}
}
