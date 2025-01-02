import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FrenchFriesSizes, SauceOption } from './type/FrenchFriesTypes';
import { addItem } from '../cart-items/cartSlice';
import styles from '../pizza-items/pizzaModal.module.css';

interface FrenchFriesModalProps {
	name: string;
	description?: string;
	image: string;
	sizes: FrenchFriesSizes[];
	sauces: SauceOption[];
	onClose: () => void;
}

const FrenchFriesModal: React.FC<FrenchFriesModalProps> = ({
	name,
	description,
	image,
	sizes,
	sauces,
	onClose,
}) => {
	const { t } = useTranslation();
	const [selectedSize, setSelectedSize] = useState<FrenchFriesSizes>(sizes[0]);
	const [selectedSauces, setSelectedSauces] = useState<SauceOption[]>([]);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	const handleSizeChange = (size: FrenchFriesSizes): void => {
		setSelectedSize(size);
	};

	const handleSauceToggle = (sauce: SauceOption): void => {
		setSelectedSauces((prev) =>
			prev.includes(sauce) ? prev.filter((s) => s !== sauce) : [...prev, sauce]
		);
	};

	const increaseQuantity = (): void => setQuantity(quantity + 1);
	const decreaseQuantity = (): void => setQuantity(quantity > 1 ? quantity - 1 : 1);

	const calculateTotalPrice = (): number => {
		const saucesTotal = selectedSauces.reduce((acc, sauce) => acc + (sauce.price || 0), 0);
		return (selectedSize.price + saucesTotal) * quantity;
	};
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
		};
	}, []);

	const handleAddToCart = (): void => {
		const uniqueId = `${name}-${selectedSize.size}-${selectedSauces.map((extra) => extra.label).join(',')}`;
		const singlePizzaPrice =
			selectedSize.price + selectedSauces.reduce((acc, sauce) => acc + (sauce.price || 0), 0);
		dispatch(
			addItem({
				id: uniqueId,
				type: 'frenchFries',
				name,
				image,
				price: singlePizzaPrice,
				quantity,
				size: selectedSize.size,
				sauces: selectedSauces,
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
					<div className={styles.description}>{description}</div>

					<div className={styles.typeTitle}>{t('selectSize')}:</div>
					<select
						aria-label={t('frenchFriesSize')}
						onChange={(e) => handleSizeChange(sizes[+e.target.value])}
					>
						{sizes.map((size, index) => (
							<option key={size.label} value={index}>
								{t(`frenchFriesSizes.${size.label}`)} ({size.size}) - {size.price} €
							</option>
						))}
					</select>

					<div className={styles.typeTitle}>{t('chooseSauces')}:</div>
					<div className={styles.ingredientContainer}>
						{sauces.map((sauce, index) => (
							<label key={index} className={styles.extraOption}>
								<input
									type="checkbox"
									onChange={() => handleSauceToggle(sauce)}
									checked={selectedSauces.includes(sauce)}
								/>
								{t(`frenchFriesSauces.${sauce.label}`)} {sauce.price ? `(+${sauce.price} €)` : ''}
							</label>
						))}
					</div>
				</div>

				<div className={styles.footer}>
					<div className={styles.quantityControls}>
						<button type="button" onClick={decreaseQuantity} className={styles.quantityButton}>
							-
						</button>
						<span className={styles.quantity}>{quantity}</span>
						<button type="button" onClick={increaseQuantity} className={styles.quantityButton}>
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

export default FrenchFriesModal;
