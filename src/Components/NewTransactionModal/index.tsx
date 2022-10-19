import { useState } from 'react';
import Modal from 'react-modal';

import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

Modal.setAppElement('#root');

export default function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) {
	const [type, setType] = useState('deposit');

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button
				type="button"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				<img src={close} alt="Fechar modal" />
			</button>

			<Container>
				<h2>Cadastrar transação</h2>

				<input placeholder="Título" />
				<input type="number" placeholder="Valor" />

				<TransactionTypeContainer>
					<RadioBox
						type="button"
						onClick={() => {
							setType('deposit');
						}}
						isActive={type === 'deposit'}
						activeColor="green"
					>
						<img src={income} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type="button"
						onClick={() => {
							setType('withdraw');
						}}
						isActive={type === 'withdraw'}
						activeColor="red"
					>
						<img src={outcome} alt="Saída" />
						<span>Saída</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input placeholder="Categoria" />

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
