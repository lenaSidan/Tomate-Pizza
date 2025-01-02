import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CalzoneSize, ExtraIngredientCalzone } from './type/CalzoneTypes';
import { addItem } from '../cart-items/cartSlice';
import styles from '../pizza-items/pizzaModal.module.css';

interface CalzoneModalProps {
	name: string;
	description: string;
	image: string;
	sizes: CalzoneSize[];
	extrasCalzone: ExtraIngredientCalzone[];
	onClose: () => void;
}

const CalzoneModal: React.FC<CalzoneModalProps> = ({
	name,
	description,
	sizes,
	extrasCalzone,
	image,
	onClose,
}) => {
	const { t } = useTranslation();
	const [selectedSize, setSelectedSize] = useState<CalzoneSize>(sizes[0]);
	const [selectedExtras, setSelectedExtras] = useState<ExtraIngredientCalzone[]>([]);
	const [quantity, setQuantity] = useState(1);
	const [showAllExtras, setShowAllExtras] = useState(false);
	const dispatch = useDispatch();

	const handleSizeChange = (size: CalzoneSize): void => {
		setSelectedSize(size);
	};

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
		};
	}, []);

	const handleExtraToggle = (extra: ExtraIngredientCalzone): void => {
		setSelectedExtras((prev) =>
			prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
		);
	};

	const getExtraPrice = (extra: ExtraIngredientCalzone): number => {
		const sizeKey = selectedSize.label as 'Klein' | 'Mittel';
		return extra.priceBySize[sizeKey] || 0;
	};

	const increaseQuantity = (): void => setQuantity(quantity + 1);
	const decreaseQuantity = (): void => setQuantity(quantity > 1 ? quantity - 1 : 1);

	const calculateTotalPrice = (): number => {
		const extrasTotal = selectedExtras.reduce((acc, extra) => acc + getExtraPrice(extra), 0);
		const singlePizzaPrice = selectedSize.price + extrasTotal;
		return singlePizzaPrice * quantity;
	};

	const handleAddToCart = (): void => {
		const uniqueId = `${name}-${selectedSize.size}-${selectedExtras.map((extra) => extra.label).join(',')}`;
		dispatch(
			addItem({
				id: uniqueId,
				type: 'calzone',
				name,
				image,
				price: calculateTotalPrice() / quantity, // передаем цену за единицу
				quantity,
				extrasCalzone: selectedExtras,
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
					<div className={styles.description}>{description}</div>

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

					<div className={styles.typeTitle}>{t('youExtras')}:</div>
					<div
						className={`${styles.ingredientContainer} ${showAllExtras ? styles.scrollable : ''}`}
					>
						{extrasCalzone.slice(0, showAllExtras ? extrasCalzone.length : 3).map((extra) => (
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
					{extrasCalzone.length > 3 && (
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

export default CalzoneModal;
