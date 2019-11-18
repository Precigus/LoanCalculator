import Loan from './loan';

export default class QuickLoan extends Loan {
	constructor(amount: number, term: number) {
		super(amount, term);
		this.interest = 20;
	}

	isTermValid(): boolean {
		return this.term < 24;
	}
}
