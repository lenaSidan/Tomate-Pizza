import { useEffect, useState } from 'react';
import styles from '../wunsch-pizza/wunschPizzaModal.module.css';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart-items/cartSlice';
import { FreeIngredient } from '../wunsch-pizza/type/WunschPizzaTypes';

interface BreadsticksModalProps {
	name: string;
	description: string;
	price: number;
	image: string;
	freeIngredients: FreeIngredient[];
	freeIngredientsLimit: number;
	onClose: () => void;
}

const BreadsticksModal: React.FC<BreadsticksModalProps> = ({
	name,
	description,
	price,
	image,
	freeIngredients,
	freeIngredientsLimit = 1,
	onClose,
}) => {
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();
	const [selectedFreeIngredients, setSelectedFreeIngredients] = useState<FreeIngredient[]>([]);
	const increaseQuantity = (): void => setQuantity(quantity + 1);
	const decreaseQuantity = (): void => setQuantity(quantity > 1 ? quantity - 1 : 1);
	const [showAllFree, setShowAllFree] = useState(false);

	const handleFreeIngredientToggle = (ingredient: FreeIngredient): void => {
		setSelectedFreeIngredients((prev) => {
			const isSelected = prev.includes(ingredient);

			const updatedIngredients = isSelected
				? prev.filter((ing) => ing !== ingredient)
				: prev.length < freeIngredientsLimit
					? [...prev, ingredient]
					: prev;

			if (updatedIngredients.length === freeIngredientsLimit) {
				setShowAllFree(false);
			}

			return updatedIngredients;
		});
	};
	const calculateTotalPrice = (): number => {
		return price * quantity;
	};

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
		};
	}, []);

	const handleAddToCart = (): void => {
		dispatch(
			addItem({
				id: name,
				type: 'breadsticks',
				name,
				image,
				price,
				quantity,
				freeIngredients: selectedFreeIngredients,
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
					<div className={styles.typeTitle}>{t('chooseTwoFreeIngredients')}:</div>
					<div className={`${styles.ingredientContainer2} ${showAllFree ? styles.scrollable : ''}`}>
						{[
							...selectedFreeIngredients,
							...freeIngredients.filter((ing) => !selectedFreeIngredients.includes(ing)),
						]
							.slice(0, showAllFree ? freeIngredients.length : 2)
							.map((ingredient) => (
								<label key={ingredient.label} className={styles.freeIngredientOption}>
									<input
										type="checkbox"
										onChange={() => handleFreeIngredientToggle(ingredient)}
										checked={selectedFreeIngredients.includes(ingredient)}
									/>
									{t(`ingredients.${ingredient.label}`)}
								</label>
							))}
					</div>
					{freeIngredients.length > 2 && (
						<button
							type="button"
							onClick={() => setShowAllFree(!showAllFree)}
							className={styles.toggleButton}
						>
							{showAllFree ? t('Show Less') : t('Show More')}
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

export default BreadsticksModal;
