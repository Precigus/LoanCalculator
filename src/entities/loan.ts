import ILoan from '../interfaces/iLoan';

export default abstract class Loan implements ILoan {
	amount: number;
	term: number;
	interest: number;

	constructor(amount: number, term: number, interest?: number) {
		this.amount = amount;
		this.term = term;
	}

	isTermValid(): boolean {
		return this.term * 12 <= 12;
	}
	calculatePayments(): number {
		let monthlyPayment = (this.amount * (1 + this.interest / 100)) / this.term;
		return monthlyPayment;
	}
}
