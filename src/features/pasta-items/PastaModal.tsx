import { useEffect, useState } from 'react';
import styles from './pastaModal.module.css';
import { Ingredients } from './type/PastaTypes';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart-items/cartSlice';

interface PastaModalProps {
	name: string;
	description: string;
	price: number;
	ingredients: Ingredients[];
	image: string;
	onClose: () => void;
}

const PastaModal: React.FC<PastaModalProps> = ({
	name,
	description,
	price,
	ingredients,
	image,
	onClose,
}) => {
	const [quantity, setQuantity] = useState(1);
	const [selectedIngredient, setSelectedIngredient] = useState<Ingredients | null>(null);
	const dispatch = useDispatch();

	const increaseQuantity = (): void => setQuantity(quantity + 1);
	const decreaseQuantity = (): void => setQuantity(quantity > 1 ? quantity - 1 : 1);

	const calculateTotalPrice = (): number => {
		return price * quantity;
	};

	useEffect(() => {
		document.body.style.overflow = 'hidden'; // Отключаем прокрутку
		return () => {
			document.body.style.overflow = ''; // Восстанавливаем прокрутку при закрытии
		};
	}, []);

	const handleIngredientSelect = (ingredient: Ingredients): void => {
		setSelectedIngredient(ingredient);
	};

	const handleAddToCart = (): void => {
		if (!selectedIngredient) {
			alert(t('Please select an ingredient'));
			return;
		}

		dispatch(
			addItem({
				id: name + selectedIngredient.label,
				type: 'pasta',
				name,
				image,
				price,
				quantity,
				ingredients: [selectedIngredient],
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
					<div className={styles.typeTitle}>{t('yourTypeOfPasta')}:</div>
					<div className={styles.ingredientContainer}>
						{ingredients.map((ingredient) => (
							<label key={ingredient.label} className={styles.extraOption}>
								<input
									type="radio"
									name="ingredient"
									onChange={() => handleIngredientSelect(ingredient)}
									checked={selectedIngredient === ingredient}
								/>
								{t(`ingredients.${ingredient.label}`)}
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

export default PastaModal;
