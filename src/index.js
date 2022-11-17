import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';

import App from './App';

ReactDom.render(
	<Provider store={store}>
		<PersistGate loading='null' persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
