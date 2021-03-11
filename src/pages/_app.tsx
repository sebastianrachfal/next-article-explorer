import React, { useEffect } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout/Layout';
import { Provider } from 'react-redux';
import '../styles/tailwind.scss';
import { store } from '../app/store';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps, tagStyles }) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
