import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

export default function Summary() {
	const { transactions } = useTransactions();

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === 'deposit') {
				acc.deposits += transaction.amount;
				acc.total += transaction.amount;
			} else {
				acc.withdraws += transaction.amount;
				acc.total -= transaction.amount;
			}

			return acc;
		},
		{
			deposits: 0,
			withdraws: 0,
			total: 0,
		}
	);

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={income} alt="Entradas" />
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(summary.deposits)}
				</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcome} alt="Saídas" />
				</header>
				<strong>
					-
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(summary.withdraws)}
				</strong>
			</div>
			<div className="highlight-background">
				<header>
					<p>Total</p>
					<img src={total} alt="Total" />
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(summary.total)}
				</strong>
			</div>
		</Container>
	);
}
