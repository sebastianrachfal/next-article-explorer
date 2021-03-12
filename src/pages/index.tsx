import Head from 'next/head';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/store';
import { ArticleItem } from '../components/ArticleItem';
import { fetchArticles, setFetchSuccess } from '../features/article/slice';
import { fetchArticleData } from '../features/article/calls';
import Loader from 'react-loader-spinner';

export default function Home({ premadeData }) {
	const articles = useSelector((state) => state.articles);
	const dispatch = useAppDispatch();
	let scrollLimit;
	let canLoad = true;
	let lastindex = 1;
	function calcScrollLimit() {
		scrollLimit = Math.max(
			document.body.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.clientHeight,
			document.documentElement.scrollHeight,
			document.documentElement.offsetHeight
		);
	}
	function scrollHandler() {
		calcScrollLimit();
		if (canLoad && scrollLimit - window.scrollY - window.innerHeight < window.innerHeight) {
			dispatch(fetchArticles(++lastindex));
			canLoad = false;
			setTimeout(() => (canLoad = true), 2000);
		}
	}
	useEffect(() => {
		calcScrollLimit();

		window.addEventListener('scroll', scrollHandler);
		if (premadeData?.length > 0) {
			dispatch(setFetchSuccess(premadeData));
		} else {
			console.log('static props empty');
			dispatch(fetchArticles(1));
		}
		return () => window.removeEventListener('scroll', scrollHandler);
	}, []);
	return (
		<>
			<Head>
				<title>Article explorer</title>
			</Head>
			<section className='text-gray-700 body-font'>
				<div className='container md:px-8 pt-4 mx-auto lg:px-4 sm:px-0'>
					<div className='flex flex-wrap text-left'>
						{(articles.isFetched ? articles.currentData : premadeData ?? []).map((e) => (
							<ArticleItem key={'article-card_' + e.id} data={e} />
						))}
					</div>
				</div>
				{articles.isLoading ? (
					<div className='flex justify-center my-8'>
						<Loader type='TailSpin' color='#3e8eda' height={50} width={50} timeout={3000} />
					</div>
				) : null}
			</section>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			premadeData: await fetchArticleData(1),
		},
		revalidate: 60,
	};
}
