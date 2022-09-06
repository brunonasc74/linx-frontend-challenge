import { useState, useEffect } from 'react';
import Product from './Product';
import Title from './Title';

const ProductsSection = () => {
	const [firstLoad, setFirstLoad] = useState(true);
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(
		'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'
	);

	const loadProducts = async () => {
		const res = await fetch(page);
		const data = await res.json();

		if (!firstLoad) {
			setProducts((it) => [...it, ...data.products]);
			setPage('https://' + data.nextPage);
		} else {
			setProducts([...data.products]);
			setPage('https://' + data.nextPage);
			setFirstLoad(false);
		}
	};

	useEffect(() => {
		const loading = () => loadProducts();
		loading();
	}, []);

	return (
		<div>
			<Title text={'Sua seleção especial'} />
			<div className='product-grid'>
				{products.map((it) => {
					return (
						<Product
							key={it.id}
							productImg={it.image}
							productName={it.name}
							productDesc={it.description}
							oldPrice={it.oldPrice}
							price={it.price}
							count={it.installments.count}
							value={it.installments.value}
						/>
					);
				})}
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
