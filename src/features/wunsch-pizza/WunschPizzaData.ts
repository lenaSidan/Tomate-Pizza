import { Pizza } from '../pizza-items/type/PizzaTypes';

const wunschPizza: Pizza = {
	name: 'pizzas.Wunschpizza.name',
	description: 'pizzas.Wunschpizza.description',
	image: 'wunschpizza.webp',
	sizes: [
		{ label: 'Klein', size: '26 cm', price: 9.5 },
		{ label: 'Mittel', size: '32 cm', price: 13.0 },
		{ label: 'Familie', size: '46×33 cm', price: 22.5 },
	],
	productInfo: {
		allergens: [
			'pizzas.Wunschpizza.productInfo.allergens.0',
			'pizzas.Wunschpizza.productInfo.allergens.1',
			'pizzas.Wunschpizza.productInfo.allergens.2',
		],
	},
};

export default wunschPizza;
