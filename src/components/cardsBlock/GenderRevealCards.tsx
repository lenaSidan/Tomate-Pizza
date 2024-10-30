// eslint-disable-next-line import/default
import React, { useRef, useState } from 'react';
import styles from './genderRevealCards.module.css';
import { useTranslation } from 'react-i18next';
import { toPng } from 'html-to-image';
import ClearIcon from '@mui/icons-material/Clear';

const images = [
	{ id: 'genderParty_variant1', src: '/genderParty7.webp', alt: 'Image 1' },
	{ id: 'genderParty_variant2', src: '/genderParty2.webp', alt: 'Image 2' },
	{ id: 'genderParty_variant3', src: '/genderParty11.webp', alt: 'Image 3' },
	{ id: 'genderParty_variant4', src: '/genderParty6.webp', alt: 'Image 4' },
	{ id: 'genderParty_variant5', src: '/genderParty9.webp', alt: 'Image 5' },
	{ id: 'genderParty_variant6', src: '/genderParty1.webp', alt: 'Image 6' },
	{ id: 'genderParty_variant7', src: '/genderParty3.webp', alt: 'Image 7' },
	{ id: 'genderParty_variant8', src: '/genderParty8.webp', alt: 'Image 8' },
];
function GenderRevealCards(): JSX.Element {
	const { t } = useTranslation();
	const [recipientName, setRecipientName] = useState('');
	const [recipientGender, setRecipientGender] = useState('');
	const [letterVariant, setLetterVariant] = useState('variant1');
	const [senderName, setSenderName] = useState('');
	const [RSVPDate, setRSVPDate] = useState('');
	const [RSVPTime, setRSVPTime] = useState('');
	const [RSVPLocation, setRSVPLocation] = useState('');
	const [RSVPDeadline, setRSVPDeadline] = useState('');

	const [isAgreed, setIsAgreed] = useState(false);
	const [selectedImage, setSelectedImage] = useState('genderParty_variant1');
	const [previewLanguage, setPreviewLanguage] = useState('de');
	const previewRef = useRef<HTMLDivElement>(null);

	const currentDate = new Date().toLocaleDateString('de-DE', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
	const defaultDate = t('defaultDate').replace('{{date}}', currentDate);
	const defaultTime = t('defaultRSVPTime');

	const formatDate = (dateString: string, language: string): string => {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		};
		return new Date(dateString).toLocaleDateString(language, options);
	};

	const availableLanguages = [
		{ code: 'de', name: t('german') },
		{ code: 'en', name: t('english') },
		{ code: 'tr', name: t('turkish') },
		{ code: 'ru', name: t('russian') },
		{ code: 'es', name: t('spanish') },
		{ code: 'uk', name: t('ukrainian') },
	];

	const getGreeting = (name: string, gender: string, language: string): string => {
		if (!gender) return '';
		switch (gender) {
			case 'maleCards':
				return t('dearWithNameMaleCards', { lng: language, name });
			case 'femaleCards':
				return t('dearWithNameFemaleCards', { lng: language, name });
			case 'neutralCards':
				return t('dearWithNamePluralCards', { lng: language, name });
			default:
				return t('dearFriendsCards', { lng: language, name });
		}
	};

	const letters = [
		{
			id: 'variant1',
			title: t('genderRevealCardTitle.variant1'),
			date: RSVPDate ? formatDate(RSVPDate, previewLanguage) : t('defaultRSVPDate'),
			time: RSVPTime ? RSVPTime : defaultTime,
			location: RSVPLocation ? RSVPLocation : t('genderRevealCardLocation.variant1'),
			body: [
				<div className={styles.cards} key="variant1-body">
					<p key="variant1-paragraph1">{t('genderRevealCard.variant1.paragraph1')}</p>
					<p key="variant1-paragraph2">
						{t('genderRevealCard.variant1.paragraph2', {
							RSVPDeadline: RSVPDeadline ? formatDate(RSVPDeadline, previewLanguage) : defaultDate,
						})}
					</p>
				</div>,
			],
			signature: t('genderRevealCardSignature.variant1'),
		},
		{
			id: 'variant2',
			title: t('genderRevealCardTitle.variant2'),
			date: RSVPDate ? formatDate(RSVPDate, previewLanguage) : t('defaultRSVPDate'),
			time: RSVPTime ? RSVPTime : defaultTime,
			location: RSVPLocation ? RSVPLocation : t('genderRevealCardLocation.variant2'),
			body: [
				<div className={styles.cards} key="variant2-body">
					<p key="variant2-paragraph1">{t('genderRevealCard.variant2.paragraph1')}</p>
					<p key="variant2-paragraph2">
						{t('genderRevealCard.variant2.paragraph2', {
							RSVPDeadline: RSVPDeadline ? formatDate(RSVPDeadline, previewLanguage) : defaultDate,
						})}
					</p>
				</div>,
			],
			signature: t('genderRevealCardSignature.variant2'),
		},
		{
			id: 'variant3',
			title: t('genderRevealCardTitle.variant3'),
			date: RSVPDate ? formatDate(RSVPDate, previewLanguage) : t('defaultRSVPDate'),
			time: RSVPTime ? RSVPTime : defaultTime,
			location: RSVPLocation ? RSVPLocation : t('genderRevealCardLocation.variant3'),
			body: [
				<div className={styles.cards} key="variant3-body">
					<p key="variant3-paragraph1">{t('genderRevealCard.variant3.paragraph1')}</p>
					<p key="variant3-paragraph2">
						{t('genderRevealCard.variant3.paragraph2', {
							RSVPDeadline: RSVPDeadline ? formatDate(RSVPDeadline, previewLanguage) : defaultDate,
						})}
					</p>
				</div>,
			],
			signature: t('genderRevealCardSignature.variant3'),
		},
	];

	const handleSaveAsImage = (): void => {
		if (previewRef.current) {
			toPng(previewRef.current as HTMLElement)
				.then((dataUrl: string) => {
					const link = document.createElement('a');
					link.download = 'genderRevealCard.png';
					link.href = dataUrl;
					link.click();
				})
				.catch((error: Error) => {
					console.error('Could not generate image', error);
				});
		}
	};

	return (
		<div className={styles.cardsBox}>
			<h1 className={styles.titlePage}>{t('genderRevealCardsTitle')}</h1>
			<p className={styles.subtitlePage}>{t('genderRevealCardsSubtitle')}</p>
			<div className={styles.mainContainer}>
				<div className={styles.topContainer}>
					<div className={styles.leftContainer}>
						<p className={styles.titleLetter}>{t('letterVariants')}</p>
						{letters.map((letter) => (
							<div
								key={letter.id}
								className={`${styles.letterOption} ${letterVariant === letter.id ? styles.selected : ''}`}
								onClick={() => setLetterVariant(letter.id)}
							>
								<div className={styles.cardBox}>
									<h3>{letter.title}</h3>
									<div className={styles.cards}>
										<p>{letter.date}</p>
										<p>{letter.time}</p>
										<p>{letter.location}</p>
									</div>
									<p>{letter.body}</p>
								</div>
							</div>
						))}
						<div className={styles.inputBox}>
							<div className={styles.nameBox}>
								<select
									id="recipientGender"
									className={styles.genderBox}
									value={recipientGender}
									onChange={(e) => setRecipientGender(e.target.value)}
									aria-label={t('selectGenderLabel')}
								>
									<option value="">{t('selectGender')}</option>
									<option value="maleCards">{t('maleCards')}</option>
									<option value="femaleCards">{t('femaleCards')}</option>
									<option value="neutralCards">{t('neutralCards')}</option>
									<option value="friendsCards">{t('friendsCards')}</option>
								</select>

								<div className={styles.inputBlockRecipientName}>
									<input
										id="recipientName"
										className={styles.name}
										type="text"
										value={recipientName}
										onChange={(e) => setRecipientName(e.target.value)}
										required
										aria-label={t('recipientNamePlaceholder')}
									/>
									{recipientName && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setRecipientName('');
												setRecipientGender('');
											}}
											aria-label={t('clearRecipientName')}
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${recipientName && styles.filledPlaceholder}`}
									>
										{t('recipientNamePlaceholder')}
									</label>
								</div>
							</div>

							<div className={styles.nameBox}>
								<div className={styles.inputBlock}>
									<input
										id="RSVPDate"
										className={styles.date}
										type="date"
										value={RSVPDate}
										onChange={(e) => setRSVPDate(e.target.value)}
										required
										aria-label={t('RSVPDatePlaceholder')}
									/>
									<span className={styles.placeholderDate}>{t('RSVPDatePlaceholder')}</span>
								</div>
								<div className={styles.inputBlock}>
									<input
										id="RSVPTime"
										className={styles.date}
										type="time"
										value={RSVPTime}
										onChange={(e) => setRSVPTime(e.target.value)}
										required
										aria-label={t('RSVPTimePlaceholder')}
									/>
									<span className={styles.placeholderDate}>{t('RSVPTimePlaceholder')}</span>
								</div>
							</div>
							<div className={styles.nameBox}>
								<div className={styles.inputBlock}>
									<input
										id="RSVPLocation"
										className={styles.name}
										type="text"
										value={RSVPLocation}
										onChange={(e) => setRSVPLocation(e.target.value)}
										required
										aria-label={t('RSVPLocationPlaceholder')}
									/>
									{RSVPLocation && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setRSVPLocation('');
											}}
											aria-label={t('clearRecipientName')}
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${RSVPLocation && styles.filledPlaceholder}`}
									>
										{t('RSVPLocationPlaceholder')}
									</label>
								</div>
							</div>
							<div className={styles.inputBlock}>
								<input
									id="RSVPDeadline"
									className={styles.date}
									type="date"
									value={RSVPDeadline}
									onChange={(e) => setRSVPDeadline(e.target.value)}
									required
									aria-label={t('RSVPDeadlinePlaceholder')}
								/>
								<span className={styles.placeholderDate}>{t('RSVPDeadlinePlaceholder')}</span>
							</div>
							<div className={styles.nameBox}>
								<div className={styles.inputBlock}>
									<input
										id="senderName"
										className={styles.name}
										type="text"
										value={senderName}
										onChange={(e) => setSenderName(e.target.value)}
										required
										aria-label={t('senderNamePlaceholder')}
									/>
									{senderName && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setSenderName('');
											}}
											aria-label={t('clearSenderName')}
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${senderName && styles.filledPlaceholder}`}
									>
										{t('senderNamePlaceholder')}
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.rightContainer}>
						<p className={styles.titleLetter}>{t('imageVariants')}</p>
						<div className={styles.imageOptions}>
							{images.map((image) => (
								<label key={image.id}>
									<input
										type="radio"
										value={image.id}
										checked={selectedImage === image.id}
										onChange={() => setSelectedImage(image.id)}
									/>
									<img src={image.src} alt={image.alt} className={styles.imagePreview} />
								</label>
							))}
						</div>
					</div>
				</div>
				<div className={styles.bottomContainer}>
					<div className={styles.previewContainer} ref={previewRef}>
						<div className={styles.letter}>
							<p className={styles.titleLetter}>
								{t(`genderRevealCardTitle.${letterVariant}`, { lng: previewLanguage })}
							</p>

							{recipientGender && (
								<p className={styles.textContainer}>
									{getGreeting(
										recipientName || t('defaultRecipientName', { lng: previewLanguage }),
										recipientGender,
										previewLanguage
									)}
								</p>
							)}

							<div className={styles.textContainer}>
								<strong>{t('RSVPDate', { lng: previewLanguage })}:</strong>{' '}
								{RSVPDate ? formatDate(RSVPDate, previewLanguage) : defaultDate}
								<br />
								<strong>{t('RSVPTime', { lng: previewLanguage })}:</strong>{' '}
								{RSVPTime ? RSVPTime : t('defaultRSVPTime', { lng: previewLanguage })}
								<br />
								<strong>{t('RSVPLocation', { lng: previewLanguage })}:</strong>{' '}
								{RSVPLocation
									? RSVPLocation
									: t(`genderRevealCardLocation.${letterVariant}`, { lng: previewLanguage })}
							</div>

							<div className={styles.textContainer}>
								{t(`genderRevealCard.${letterVariant}.paragraph1`, {
									lng: previewLanguage,
									name: recipientName || t('defaultRecipientName', { lng: previewLanguage }),
								})}
							</div>
							<div className={styles.textContainerP2}>
								{t(`genderRevealCard.${letterVariant}.paragraph2`, {
									lng: previewLanguage,
									RSVPDeadline: RSVPDeadline
										? formatDate(RSVPDeadline, previewLanguage)
										: defaultDate,
								})}
							</div>
							<div className={styles.textContainer}>
								<br />
								{senderName && (
									<>
										<span className={styles.signature}>
											{t(`genderRevealCardSignature.${letterVariant}`, { lng: previewLanguage })}
										</span>
										<br />
										<span className={styles.signatureLine}>
											{senderName || t('defaultEasterCardSenderName', { lng: previewLanguage })}
										</span>
									</>
								)}
							</div>
						</div>
						<img
							src={images.find((image) => image.id === selectedImage)?.src}
							alt="Selected"
							className={styles.previewImage}
						/>
					</div>
				</div>

				<div className={styles.buttonContainer}>
					<select
						id="languageSelect"
						className={styles.languageSelect}
						value={previewLanguage}
						onChange={(e) => setPreviewLanguage(e.target.value)}
						aria-label={t('selectLanguageLabel')}
					>
						{availableLanguages.map((lang) => (
							<option key={lang.code} value={lang.code}>
								{lang.name}
							</option>
						))}
					</select>
				</div>

				<div className={styles.checkboxContainer}>
					<input
						type="checkbox"
						id="agreementCheckbox"
						className={styles.checkbox}
						checked={isAgreed}
						onChange={(e) => setIsAgreed(e.target.checked)}
					/>
					<label htmlFor="agreementCheckbox">{t('agreeToTerms')}</label>
				</div>
				<div className={styles.buttonDownload}>
					<button
						type="button"
						onClick={handleSaveAsImage}
						disabled={!isAgreed}
						className={isAgreed ? styles.downloadLink : styles.downloadLinkDisabled}
						aria-label={t('buttonDownloadImage')}
					>
						{t('buttonDownloadImage')}
					</button>
				</div>
				<div className={styles.paragraphBox}>
					<p className={styles.title}>{t('genderRevealTitleParagraph')}</p>
					<p className={styles.paragraphSubtitle}>{t('genderRevealCardSubtitle')}</p>

					{Array.from({ length: 9 }, (_, i) => (
						<React.Fragment key={i}>
							<p className={styles.titleParagraph}>
								{t(`genderRevealCardTextTitleParagraph${i + 2}`)}
							</p>
							<p className={styles.paragraphs}>{t(`genderRevealCardTextParagraph${i + 2}`)}</p>
						</React.Fragment>
					))}

					<p className={styles.paragraph}>{t('genderRevealCardTextParagraph11')}</p>
					<p
						className={styles.paragraphLast}
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						{t('genderRevealCardTextParagraph12')}
					</p>
				</div>
			</div>
		</div>
	);
}

export default GenderRevealCards;
