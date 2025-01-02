import { Calzone } from './type/CalzoneTypes';

const calzone: Calzone[] = [
	{
		name: 'calzone.calzone.name',
		description: 'calzone.calzone.description',
		image: 'calzone2.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.5 },
			{ label: 'Mittel', size: '32 cm', price: 11.5 },
		],
		productInfo: {
			substances: ['calzone.calzone.productInfo.substances.0'],
			allergens: [
				'calzone.calzone.productInfo.allergens.0',
				'calzone.calzone.productInfo.allergens.1',
				'calzone.calzone.productInfo.allergens.2',
				'calzone.calzone.productInfo.allergens.3',
			],
		},
	},
	{
		name: 'calzone.calzoneTomate.name',
		description: 'calzone.calzoneTomate.description',
		image: 'calzone1.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.5 },
			{ label: 'Mittel', size: '32 cm', price: 11.5 },
		],
		productInfo: {
			substances: ['calzone.calzoneTomate.productInfo.substances.0'],
			allergens: [
				'calzone.calzoneTomate.productInfo.allergens.0',
				'calzone.calzoneTomate.productInfo.allergens.1',
				'calzone.calzoneTomate.productInfo.allergens.2',
			],
		},
	},
];
export default calzone;
