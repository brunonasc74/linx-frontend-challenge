import { useState, useEffect } from 'react';
import Product from './Product';
import Title from './Title';

const ProductsSection = () => {
	const [page, setPage] = useState(1);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const firstLoad = () => loadProducts();
		firstLoad();
	}, []);

	const loadProducts = async () => {
		const res = await fetch(
			`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
		);
		const data = await res.json();

		setProducts([...products, { productsPage: data }]);
		products.forEach((it) => console.log(it));
		setPage(page + 1);
	};

	return (
		<div>
			<Title text={'Sua seleção especial'} />
			<div className='product-grid'>
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
			<input
				onClick={loadProducts}
				type='button'
				value='Ainda mais produtos aqui!'
				className='btn-product'
			></input>
		</div>
	);
};

export default ProductsSection;
