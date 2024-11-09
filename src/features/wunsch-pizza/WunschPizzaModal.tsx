import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { addItem } from '../cart-items/cartSlice';
import styles from './wunschPizzaModal.module.css';
import { PizzaSize, ExtraIngredient, FreeIngredient } from './type/WunschPizzaTypes';

interface WunschPizzaModalProps {
	name: string;
	description: string;
	image: string;
	sizes: PizzaSize[];
	extras: ExtraIngredient[];
	freeIngredients: FreeIngredient[];
	freeIngredientsLimit: number;
	onClose: () => void;
}

const WunschPizzaModal: React.FC<WunschPizzaModalProps> = ({
	name,
	description,
	image,
	sizes,
	extras,
	freeIngredients,
	freeIngredientsLimit = 1, // один ингредиент из каждого раскрывающегося списка
	onClose,
}) => {
	const { t } = useTranslation();
	const [selectedSize, setSelectedSize] = useState<PizzaSize>(sizes[0]);
	const [selectedFreeIngredients, setSelectedFreeIngredients] = useState<FreeIngredient[]>([]);
	const [selectedExtras, setSelectedExtras] = useState<ExtraIngredient[]>([]);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();
	const [showAllFree, setShowAllFree] = useState(false); // для раскрытия списка бесплатных ингредиентов
	const [showAllExtras, setShowAllExtras] = useState(false);

	const handleSizeChange = (size: PizzaSize): void => setSelectedSize(size);

	// Обработка выбора бесплатных ингредиентов
	const handleFreeIngredientToggle = (ingredient: FreeIngredient): void => {
		setSelectedFreeIngredients((prev) =>
			prev.includes(ingredient)
				? prev.filter((ing) => ing !== ingredient)
				: prev.length < freeIngredientsLimit
					? [...prev, ingredient]
					: prev
		);
	};

	// Обработка выбора платных ингредиентов
	const handleExtraToggle = (extra: ExtraIngredient): void => {
		setSelectedExtras((prev) =>
			prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
		);
	};

	const getExtraPrice = (extra: ExtraIngredient): number => {
		const sizeKey = selectedSize.label as 'Klein' | 'Mittel' | 'Familie';
		return extra.priceBySize ? extra.priceBySize[sizeKey] : 0;
	};

	const calculateTotalPrice = (): number => {
		const extrasTotal = selectedExtras.reduce((acc, extra) => acc + getExtraPrice(extra), 0);
		return (selectedSize.price + extrasTotal) * quantity;
	};

	const handleAddToCart = (): void => {
		const uniqueId = `${name}-${selectedSize.size}-${selectedExtras
			.map((extra) => extra.label)
			.join(',')}`;
		dispatch(
			addItem({
				id: uniqueId,
				type: 'wunschpizza',
				name,
				image,
				price: calculateTotalPrice(),
				quantity,
				extras: selectedExtras.map((extra) => ({
					...extra,
					priceBySize: extra.priceBySize || { Klein: 0, Mittel: 0, Familie: 0 },
				})),
				freeIngredients: selectedFreeIngredients,
				size: selectedSize.size,
			})
		);
		onClose();
	};

	return (
		<div className={styles.modal} onClick={onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<button type="button" onClick={onClose} className={styles.closeButton}>
					✖
				</button>
				<div className={styles.centeredContainer}>
					<div className={styles.nameTitle}>{name}</div>
					<div className={styles.imageContainer}>
						<img src={image} alt={name} className={styles.image} />
					</div>
					<p>{description}</p>

					<div className={styles.typeTitle}>{t('selectSize')}:</div>
					<select
						aria-label={t('pizzaSize')}
						onChange={(e) => handleSizeChange(sizes[+e.target.value])}
					>
						{sizes.map((size, index) => (
							<option key={size.label} value={index}>
								{t(`pizzaSizes.${size.label}`)} ({size.size}) - {size.price} €
							</option>
						))}
					</select>

					<div className={styles.typeTitle}>{t('chooseFreeIngredients')}:</div>
					<div className={`${styles.ingredientContainer} ${showAllFree ? styles.scrollable : ''}`}>
						{freeIngredients
							.slice(0, showAllFree ? freeIngredients.length : 3)
							.map((ingredient) => (
								<label key={ingredient.label} className={styles.extraOption}>
									<input
										type="checkbox"
										onChange={() => handleFreeIngredientToggle(ingredient)}
										checked={selectedFreeIngredients.includes(ingredient)}
									/>
									{t(`ingredients.${ingredient.label}`)}
								</label>
							))}
					</div>
					{freeIngredients.length > 3 && (
						<button
							type="button"
							onClick={() => setShowAllFree(!showAllFree)}
							className={styles.toggleButton}
						>
							{showAllFree ? t('Show Less') : t('Show More')}
						</button>
					)}

					<div className={styles.typeTitle}>{t('youExtras')}:</div>
					<div
						className={`${styles.ingredientContainer} ${showAllExtras ? styles.scrollable : ''}`}
					>
						{extras.slice(0, showAllExtras ? extras.length : 3).map((extra) => (
							<label key={extra.label} className={styles.extraOption}>
								<input
									type="checkbox"
									onChange={() => handleExtraToggle(extra)}
									checked={selectedExtras.includes(extra)}
								/>
								{t(`ingredients.${extra.label}`)} (+{getExtraPrice(extra).toFixed(2)} €)
							</label>
						))}
					</div>
					{extras.length > 3 && (
						<button
							type="button"
							onClick={() => setShowAllExtras(!showAllExtras)}
							className={styles.toggleButton}
						>
							{showAllExtras ? t('Show Less') : t('Show More')}
						</button>
					)}
				</div>
				<div className={styles.footer}>
					<div className={styles.quantityControls}>
						<button
							type="button"
							onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
							className={styles.quantityButton}
						>
							-
						</button>
						<span className={styles.quantity}>{quantity}</span>
						<button
							type="button"
							onClick={() => setQuantity(quantity + 1)}
							className={styles.quantityButton}
						>
							+
						</button>
					</div>
					<div className={styles.totalPrice}>
						{t('total')}: {calculateTotalPrice().toFixed(2)} €
					</div>
					<button type="button" className={styles.addToCartButton} onClick={handleAddToCart}>
						{t('choose')}
					</button>
				</div>
			</div>
		</div>
	);
};

export default WunschPizzaModal;
