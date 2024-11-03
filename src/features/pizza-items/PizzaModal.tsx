import { useState } from 'react';
import styles from './pizzaModal.module.css';
import { ExtraIngredient, PizzaSize } from './type/PizzaTypes';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart-items/cartSlice';

interface PizzaModalProps {
	name: string;
	description: string;
	image: string;
	sizes: PizzaSize[];
	extras: ExtraIngredient[];
	onClose: () => void;
}

const PizzaModal: React.FC<PizzaModalProps> = ({
	name,
	description,
	sizes,
	extras,
	image,
	onClose,
}) => {
	const [selectedSize, setSelectedSize] = useState<PizzaSize>(sizes[0]);
	const [selectedExtras, setSelectedExtras] = useState<ExtraIngredient[]>([]);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	const handleSizeChange = (size: PizzaSize): void => {
		setSelectedSize(size);
	};

	const handleExtraToggle = (extra: ExtraIngredient): void => {
		setSelectedExtras((prev) =>
			prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
		);
	};

	const getExtraPrice = (extra: ExtraIngredient): number => {
		const sizeKey = selectedSize.label as 'Klein' | 'Mittel' | 'Familie';
		const price = extra.priceBySize[sizeKey];

		if (price === undefined) {
			console.warn(`Price for ${sizeKey} not found in extra ${extra.label}`);
			return 0;
		}
		return price;
	};

	const increaseQuantity = (): void => setQuantity(quantity + 1);
	const decreaseQuantity = (): void => setQuantity(quantity > 1 ? quantity - 1 : 1);

	const calculateTotalPrice = (): number => {
		const extrasTotal = selectedExtras.reduce((acc, extra) => acc + getExtraPrice(extra), 0);
		const singlePizzaPrice = (selectedSize ? selectedSize.price : 0) + extrasTotal;
		return singlePizzaPrice * quantity;
	};

	const handleAddToCart = (): void => {
		const uniqueId = `${name}-${selectedSize.size}-${selectedExtras.map((extra) => extra.label).join(',')}`;
		dispatch(
			addItem({
				id: uniqueId,
				type: 'pizza',
				name,
				image,
				price: calculateTotalPrice(),
				quantity,
				extras: selectedExtras,
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
								{size.label} ({size.size}) - {size.price} €
							</option>
						))}
					</select>
					<div className={styles.typeTitle}>{t('youExtras')}:</div>
					<div className={styles.ingredientContainer}>
						{extras.map((extra) => (
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

export default PizzaModal;
