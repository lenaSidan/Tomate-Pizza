import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<I18nextProvider i18n={i18n}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</I18nextProvider>
	</Provider>
);