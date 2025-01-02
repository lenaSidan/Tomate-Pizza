import { Pizza } from './type/PizzaTypes';

const pizzas: Pizza[] = [
	{
		name: 'pizzas.PizzaMargarita.name',
		description: 'pizzas.PizzaMargarita.description',
		image: 'margarita.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 7.0 },
			{ label: 'Mittel', size: '32 cm', price: 9.5 },
			{ label: 'Familie', size: '46×33 cm', price: 17.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaMargarita.productInfo.allergens.0',
				'pizzas.PizzaMargarita.productInfo.allergens.1',
				'pizzas.PizzaMargarita.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaFunghi.name',
		description: 'pizzas.PizzaFunghi.description',
		image: 'funghi.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 7.5 },
			{ label: 'Mittel', size: '32 cm', price: 9.5 },
			{ label: 'Familie', size: '46×33 cm', price: 18.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaFunghi.productInfo.allergens.0',
				'pizzas.PizzaFunghi.productInfo.allergens.1',
				'pizzas.PizzaFunghi.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaSalami.name',
		description: 'pizzas.PizzaSalami.description',
		image: 'salami.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 8.5 },
			{ label: 'Mittel', size: '32 cm', price: 10.5 },
			{ label: 'Familie', size: '46×33 cm', price: 19.5 },
		],
		productInfo: {
			substances: [
				'pizzas.PizzaSalami.productInfo.substances.0',
				'pizzas.PizzaSalami.productInfo.substances.1',
				'pizzas.PizzaSalami.productInfo.substances.2',
			],
			allergens: [
				'pizzas.PizzaSalami.productInfo.allergens.0',
				'pizzas.PizzaSalami.productInfo.allergens.1',
				'pizzas.PizzaSalami.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaProsciutto.name',
		description: 'pizzas.PizzaProsciutto.description',
		image: 'prosciutto.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 8.5 },
			{ label: 'Mittel', size: '32 cm', price: 10.5 },
			{ label: 'Familie', size: '46×33 cm', price: 19.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaProsciutto.productInfo.allergens.0',
				'pizzas.PizzaProsciutto.productInfo.allergens.1',
				'pizzas.PizzaProsciutto.productInfo.allergens.2',
				'pizzas.PizzaProsciutto.productInfo.allergens.3',
			],
		},
	},
	{
		name: 'pizzas.PizzaSpinaci.name',
		description: 'pizzas.PizzaSpinaci.description',
		image: 'spinaci.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 8.5 },
			{ label: 'Mittel', size: '32 cm', price: 10.5 },
			{ label: 'Familie', size: '46×33 cm', price: 19.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaSpinaci.productInfo.allergens.0',
				'pizzas.PizzaSpinaci.productInfo.allergens.1',
				'pizzas.PizzaSpinaci.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaTonno.name',
		description: 'pizzas.PizzaTonno.description',
		image: 'tonno.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.0 },
			{ label: 'Mittel', size: '32 cm', price: 11.0 },
			{ label: 'Familie', size: '46×33 cm', price: 20.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaTonno.productInfo.allergens.0',
				'pizzas.PizzaTonno.productInfo.allergens.1',
				'pizzas.PizzaTonno.productInfo.allergens.2',
				'pizzas.PizzaTonno.productInfo.allergens.3',
			],
		},
	},
	{
		name: 'pizzas.PizzaTomate.name',
		description: 'pizzas.PizzaTomate.description',
		image: 'tomate.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 8.5 },
			{ label: 'Mittel', size: '32 cm', price: 10.5 },
			{ label: 'Familie', size: '46×33 cm', price: 19.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaTomate.productInfo.allergens.0',
				'pizzas.PizzaTomate.productInfo.allergens.1',
				'pizzas.PizzaTomate.productInfo.allergens.2',
				'pizzas.PizzaTomate.productInfo.allergens.3',
			],
		},
	},
	{
		name: 'pizzas.PizzaBroccoli.name',
		description: 'pizzas.PizzaBroccoli.description',
		image: 'broccoli.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.0 },
			{ label: 'Mittel', size: '32 cm', price: 11.0 },
			{ label: 'Familie', size: '46×33 cm', price: 20.5 },
		],
		productInfo: {
			substances: [
				'pizzas.PizzaBroccoli.productInfo.substances.0',
				'pizzas.PizzaBroccoli.productInfo.substances.1',
			],
			allergens: [
				'pizzas.PizzaBroccoli.productInfo.allergens.0',
				'pizzas.PizzaBroccoli.productInfo.allergens.1',
				'pizzas.PizzaBroccoli.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaBolognese.name',
		description: 'pizzas.PizzaBolognese.description',
		image: 'bolognese_pizza.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.0 },
			{ label: 'Mittel', size: '32 cm', price: 11.0 },
			{ label: 'Familie', size: '46×33 cm', price: 20.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaBolognese.productInfo.allergens.0',
				'pizzas.PizzaBolognese.productInfo.allergens.1',
				'pizzas.PizzaBolognese.productInfo.allergens.2',
				'pizzas.PizzaBolognese.productInfo.allergens.3',
				'pizzas.PizzaBolognese.productInfo.allergens.4',
				'pizzas.PizzaBolognese.productInfo.allergens.5',
			],
		},
	},
	{
		name: 'pizzas.PizzaRoma.name',
		description: 'pizzas.PizzaRoma.description',
		image: 'roma.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.5 },
			{ label: 'Mittel', size: '32 cm', price: 11.5 },
			{ label: 'Familie', size: '46×33 cm', price: 21.5 },
		],
		productInfo: {
			substances: [
				'pizzas.PizzaRoma.productInfo.substances.0',
				'pizzas.PizzaRoma.productInfo.substances.1',
			],
			allergens: [
				'pizzas.PizzaRoma.productInfo.allergens.0',
				'pizzas.PizzaRoma.productInfo.allergens.1',
				'pizzas.PizzaRoma.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaHawaii.name',
		description: 'pizzas.PizzaHawaii.description',
		image: 'hawaii.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.0 },
			{ label: 'Mittel', size: '32 cm', price: 11.0 },
			{ label: 'Familie', size: '46×33 cm', price: 20.5 },
		],
		productInfo: {
			substances: ['pizzas.PizzaHawaii.productInfo.substances.0'],
			allergens: [
				'pizzas.PizzaHawaii.productInfo.allergens.0',
				'pizzas.PizzaHawaii.productInfo.allergens.1',
				'pizzas.PizzaHawaii.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaFruttiDiMare.name',
		description: 'pizzas.PizzaFruttiDiMare.description',
		image: 'fruttiDiMare.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.0 },
			{ label: 'Mittel', size: '32 cm', price: 11.0 },
			{ label: 'Familie', size: '46×33 cm', price: 20.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaFruttiDiMare.productInfo.allergens.0',
				'pizzas.PizzaFruttiDiMare.productInfo.allergens.1',
				'pizzas.PizzaFruttiDiMare.productInfo.allergens.2',
				'pizzas.PizzaFruttiDiMare.productInfo.allergens.3',
				'pizzas.PizzaFruttiDiMare.productInfo.allergens.4',
				'pizzas.PizzaFruttiDiMare.productInfo.allergens.5',
			],
		},
	},
	{
		name: 'pizzas.PizzaQuattroStagioni.name',
		description: 'pizzas.PizzaQuattroStagioni.description',
		image: 'quattroStagioni.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 10.0 },
			{ label: 'Mittel', size: '32 cm', price: 13.5 },
			{ label: 'Familie', size: '46×33 cm', price: 22.5 },
		],
		productInfo: {
			substances: [
				'pizzas.PizzaQuattroStagioni.productInfo.substances.0',
				'pizzas.PizzaQuattroStagioni.productInfo.substances.1',
				'pizzas.PizzaQuattroStagioni.productInfo.substances.2',
			],
			allergens: [
				'pizzas.PizzaQuattroStagioni.productInfo.allergens.0',
				'pizzas.PizzaQuattroStagioni.productInfo.allergens.1',
				'pizzas.PizzaQuattroStagioni.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaSchinkenSalami.name',
		description: 'pizzas.PizzaSchinkenSalami.description',
		image: 'schinkenSalami.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.5 },
			{ label: 'Mittel', size: '32 cm', price: 11.5 },
			{ label: 'Familie', size: '46×33 cm', price: 21.5 },
		],
		productInfo: {
			substances: [
				'pizzas.PizzaSchinkenSalami.productInfo.substances.0',
				'pizzas.PizzaSchinkenSalami.productInfo.substances.1',
				'pizzas.PizzaSchinkenSalami.productInfo.substances.2',
				'pizzas.PizzaSchinkenSalami.productInfo.substances.3',
				'pizzas.PizzaSchinkenSalami.productInfo.substances.4',
			],
			allergens: [
				'pizzas.PizzaSchinkenSalami.productInfo.allergens.0',
				'pizzas.PizzaSchinkenSalami.productInfo.allergens.1',
				'pizzas.PizzaSchinkenSalami.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaDiavolo.name',
		description: 'pizzas.PizzaDiavolo.description',
		image: 'diavolo.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 10.0 },
			{ label: 'Mittel', size: '32 cm', price: 13.5 },
			{ label: 'Familie', size: '46×33 cm', price: 22.5 },
		],
		productInfo: {
			substances: [
				'pizzas.PizzaDiavolo.productInfo.substances.0',
				'pizzas.PizzaDiavolo.productInfo.substances.1',
				'pizzas.PizzaDiavolo.productInfo.substances.2',
			],
			allergens: [
				'pizzas.PizzaDiavolo.productInfo.allergens.0',
				'pizzas.PizzaDiavolo.productInfo.allergens.1',
				'pizzas.PizzaDiavolo.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaPrimaVera.name',
		description: 'pizzas.PizzaPrimaVera.description',
		image: 'primaVera.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.0 },
			{ label: 'Mittel', size: '32 cm', price: 11.0 },
			{ label: 'Familie', size: '46×33 cm', price: 20.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaPrimaVera.productInfo.allergens.0',
				'pizzas.PizzaPrimaVera.productInfo.allergens.1',
				'pizzas.PizzaPrimaVera.productInfo.allergens.2',
				'pizzas.PizzaPrimaVera.productInfo.allergens.3',
			],
		},
	},
	{
		name: 'pizzas.PizzaOrient.name',
		description: 'pizzas.PizzaOrient.description',
		image: 'orient.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.0 },
			{ label: 'Mittel', size: '32 cm', price: 11.5 },
			{ label: 'Familie', size: '46×33 cm', price: 21.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaOrient.productInfo.allergens.0',
				'pizzas.PizzaOrient.productInfo.allergens.1',
				'pizzas.PizzaOrient.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaQuattroFormaggi.name',
		description: 'pizzas.PizzaQuattroFormaggi.description',
		image: 'quattroFormaggi.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.0 },
			{ label: 'Mittel', size: '32 cm', price: 11.5 },
			{ label: 'Familie', size: '46×33 cm', price: 21.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaQuattroFormaggi.productInfo.allergens.0',
				'pizzas.PizzaQuattroFormaggi.productInfo.allergens.1',
				'pizzas.PizzaQuattroFormaggi.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaSchafskäse.name',
		description: 'pizzas.PizzaSchafskäse.description',
		image: 'schafskäse.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.0 },
			{ label: 'Mittel', size: '32 cm', price: 11.5 },
			{ label: 'Familie', size: '46×33 cm', price: 21.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaSchafskäse.productInfo.allergens.0',
				'pizzas.PizzaSchafskäse.productInfo.allergens.1',
				'pizzas.PizzaSchafskäse.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaShrimps.name',
		description: 'pizzas.PizzaShrimps.description',
		image: 'shrimps.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.0 },
			{ label: 'Mittel', size: '32 cm', price: 11.5 },
			{ label: 'Familie', size: '46×33 cm', price: 21.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaShrimps.productInfo.allergens.0',
				'pizzas.PizzaShrimps.productInfo.allergens.1',
				'pizzas.PizzaShrimps.productInfo.allergens.2',
				'pizzas.PizzaShrimps.productInfo.allergens.3',
			],
		},
	},
	{
		name: 'pizzas.PizzaDehli.name',
		description: 'pizzas.PizzaDehli.description',
		image: 'dehli.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.0 },
			{ label: 'Mittel', size: '32 cm', price: 11.5 },
			{ label: 'Familie', size: '46×33 cm', price: 21.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaDehli.productInfo.allergens.0',
				'pizzas.PizzaDehli.productInfo.allergens.1',
				'pizzas.PizzaDehli.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaSardellen.name',
		description: 'pizzas.PizzaSardellen.description',
		image: 'sardellen.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.5 },
			{ label: 'Mittel', size: '32 cm', price: 13.0 },
			{ label: 'Familie', size: '46×33 cm', price: 22.5 },
		],
		productInfo: {
			substances: [
				'pizzas.PizzaSardellen.productInfo.substances.0',
				'pizzas.PizzaSardellen.productInfo.substances.1',
			],
			allergens: [
				'pizzas.PizzaSardellen.productInfo.allergens.0',
				'pizzas.PizzaSardellen.productInfo.allergens.1',
				'pizzas.PizzaSardellen.productInfo.allergens.2',
				'pizzas.PizzaSardellen.productInfo.allergens.3',
			],
		},
	},
	{
		name: 'pizzas.PizzaItalia.name',
		description: 'pizzas.PizzaItalia.description',
		image: 'italia.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.5 },
			{ label: 'Mittel', size: '32 cm', price: 13.0 },
			{ label: 'Familie', size: '46×33 cm', price: 22.5 },
		],
		productInfo: {
			substances: [
				'pizzas.PizzaItalia.productInfo.substances.0',
				'pizzas.PizzaItalia.productInfo.substances.1',
			],
			allergens: [
				'pizzas.PizzaItalia.productInfo.allergens.0',
				'pizzas.PizzaItalia.productInfo.allergens.1',
				'pizzas.PizzaItalia.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaChicken.name',
		description: 'pizzas.PizzaChicken.description',
		image: 'chicken.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.5 },
			{ label: 'Mittel', size: '32 cm', price: 13.0 },
			{ label: 'Familie', size: '46×33 cm', price: 22.5 },
		],
		productInfo: {
			substances: [
				'pizzas.PizzaChicken.productInfo.substances.0',
				'pizzas.PizzaChicken.productInfo.substances.1',
			],
			allergens: [
				'pizzas.PizzaChicken.productInfo.allergens.0',
				'pizzas.PizzaChicken.productInfo.allergens.1',
				'pizzas.PizzaChicken.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaBBQ.name',
		description: 'pizzas.PizzaBBQ.description',
		image: 'BBQ.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.5 },
			{ label: 'Mittel', size: '32 cm', price: 13.0 },
			{ label: 'Familie', size: '46×33 cm', price: 22.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaBBQ.productInfo.allergens.0',
				'pizzas.PizzaBBQ.productInfo.allergens.1',
				'pizzas.PizzaBBQ.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaGorgonzola.name',
		description: 'pizzas.PizzaGorgonzola.description',
		image: 'gorgonzola.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.0 },
			{ label: 'Mittel', size: '32 cm', price: 11.5 },
			{ label: 'Familie', size: '46×33 cm', price: 21.5 },
		],
		productInfo: {
			allergens: [
				'pizzas.PizzaGorgonzola.productInfo.allergens.0',
				'pizzas.PizzaGorgonzola.productInfo.allergens.1',
				'pizzas.PizzaGorgonzola.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaVegetaria.name',
		description: 'pizzas.PizzaVegetaria.description',
		image: 'vegetaria.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 9.5 },
			{ label: 'Mittel', size: '32 cm', price: 13.0 },
			{ label: 'Familie', size: '46×33 cm', price: 22.5 },
		],
		productInfo: {
			substances: ['pizzas.PizzaVegetaria.productInfo.substances.0'],
			allergens: [
				'pizzas.PizzaVegetaria.productInfo.allergens.0',
				'pizzas.PizzaVegetaria.productInfo.allergens.1',
				'pizzas.PizzaVegetaria.productInfo.allergens.2',
			],
		},
	},
];

export default pizzas;
