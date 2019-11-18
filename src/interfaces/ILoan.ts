export default interface ILoan {
	amount: number;
	term: number;
	interest: number;

	isTermValid(): boolean;
	calculatePayments(): number;
}
