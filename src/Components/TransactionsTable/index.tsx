import { Container } from './styles';

export default function TransactionsTable() {
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Teste</td>
						<td className="deposit">R$ 12.000</td>
						<td>Teste</td>
						<td>20/02/2021</td>
					</tr>
					<tr>
						<td>Teste</td>
						<td className="withdraw">- R$ 1.000</td>
						<td>Teste</td>
						<td>20/02/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
