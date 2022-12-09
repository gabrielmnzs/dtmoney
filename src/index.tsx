import React from 'react';
import { createRoot } from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';
import { throws } from 'assert';

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freelancer de website',
					type: 'deposit',
					category: 'Dev',
					amount: 6000,
					createdAt: new Date('2022-11-05 09:00:00'),
				},
				{
					id: 2,
					title: 'Aluguel',
					type: 'withdraw',
					category: 'Casa',
					amount: 1100,
					createdAt: new Date('2022-11-08 11:00:00'),
				},
			],
		});
	},
	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction');
		});

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);

			return schema.create('transaction', data);
		});
	},
});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
