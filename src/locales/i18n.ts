import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import languages json
import translationEN from './en/translation.json';
import translationDE from './de/translation.json';
import translationTR from './tr/translation.json';
// import translationRU from './ru/translation.json';
// import translationES from './es/translation.json';
// import translationUK from './uk/translation.json';

const resources = {
	// Add similar objects for other languages
	en: {
		translation: translationEN,
	},
	de: {
		translation: translationDE,
	},
	tr: {
		translation: translationTR,
	},
	// ru: {
	// 	translation: translationRU,
	// },
	// es: {
	// 	translation: translationES,
	// },
	// uk: {
	// 	translation: translationUK,
	// },
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'de', // default language
		fallbackLng: 'de', // default fallback language
		interpolation: {
			escapeValue: false,
		},
	})
	.then(() => {})
	.catch((error) => {
		console.error('Failed to initialize i18n:', error);
	});

export default i18n;
