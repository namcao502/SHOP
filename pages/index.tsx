import {IProduct} from 'boundless-api-client';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import ProductsList from '../components/ProductsList';
import MainLayout from '../layouts/Main';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
import {IMenuItem} from '../@types/components';
import SwiperSlider from '../components/SwiperSlider';
import cliffImg from '../assets/cliff_1.jpg';
import cliff2Img from '../assets/cliff_2.jpg';
import cliff3Img from '../assets/cliff_3.jpg';
import ProductsSliderByQuery from '../components/ProductsSliderByQuery';
import {IBasicSettings} from '../@types/settings';

export default function IndexPage({products, mainMenu, footerMenu, basicSettings}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu} basicSettings={basicSettings}>
			<div className='container'>
				<MainPageSlider />
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Recommend for you</h1>
				<ProductsList products={products} query={{}}/>
			</div>
			<div className='container'>
				<h2 className='page-heading page-heading_h1  page-heading_m-h1'>Trending</h2>
				<ProductsSliderByQuery
					query={{collection: ['main-page'], sort: 'in_collection'}}
					title={''}
					wrapperClassName='page-block'
				/>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IIndexPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});
	const {products} = await apiClient.catalog.getProducts({collection: ['main-page'], sort: 'in_collection'});
	const basicSettings = await apiClient.system.fetchSettings(['system.locale', 'system.currency']) as IBasicSettings;

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			products,
			basicSettings,
			...menus
		}
	};
};

interface IIndexPageProps {
	products: IProduct[];
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
	basicSettings: IBasicSettings;
}

function MainPageSlider() {
	const slides = [
		{
			'img': cliffImg.src,
			'link': '',
			'caption': 'Everyone lives by selling something',
			'captionPosition': 'center',
			'useFilling': true,
			'fillingColor': '#000000',
			'fillingOpacity': 0.4
		},
		{
			'img': cliff2Img.src,
			'link': '',
			'caption': 'What differentiates sellers today is their ability to bring fresh ideas',
			'captionPosition': 'center',
			'useFilling': true,
			'fillingColor': '#000000',
			'fillingOpacity': 0.4
		},
		{
			'img': cliff3Img.src,
			'link': '',
			'caption': "As a brand marketer, I'm a big believer in 'branding the customer experience', not just selling the service",
			'captionPosition': 'center',
			'useFilling': true,
			'fillingColor': '#000000',
			'fillingOpacity': 0.4
		}
	];

	return (
		<SwiperSlider
			showPrevNext
			roundCorners
			pagination='progressbar'
			size={'large'}
			slides={slides}
			className={'mb-4'}
		/>
	);
}