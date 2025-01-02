import { Americana } from './type/AmericanaTypes';

const americana: Americana[] = [
	{
		name: 'americana.chickenWingsKetchup.name',
		description: 'americana.chickenWingsKetchup.description',
		image: 'chickenWingsKetchup.webp',
		price: 10.5,
		productInfo: {
			allergens: [
				'americana.chickenWingsKetchup.productInfo.allergens.0',
				'americana.chickenWingsKetchup.productInfo.allergens.1',
			],
		},
	},
	{
		name: 'americana.chickenWingsMayonnaise.name',
		description: 'americana.chickenWingsMayonnaise.description',
		image: 'chickenWingsMayonnaise.webp',
		price: 10.5,
		productInfo: {
			allergens: [
				'americana.chickenWingsMayonnaise.productInfo.allergens.0',
				'americana.chickenWingsMayonnaise.productInfo.allergens.1',
			],
		},
	},
	{
		name: 'americana.chickenNuggets.name',
		description: 'americana.chickenNuggets.description',
		image: 'chickenNuggets.webp',
		price: 10.5,
		productInfo: {
			allergens: [
				'americana.chickenNuggets.productInfo.allergens.0',
				'americana.chickenNuggets.productInfo.allergens.1',
				'americana.chickenNuggets.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'americana.chickenCordonBleu.name',
		description: 'americana.chickenCordonBleu.description',
		image: 'chickenCordonBleu.webp',
		price: 10.9,
		productInfo: {
			allergens: [
				'americana.chickenCordonBleu.productInfo.allergens.0',
				'americana.chickenCordonBleu.productInfo.allergens.1',
				'americana.chickenCordonBleu.productInfo.allergens.2',
				'americana.chickenCordonBleu.productInfo.allergens.3',
			],
		},
	},
];
export default americana;
