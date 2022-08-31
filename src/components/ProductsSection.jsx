import Product from './Product';

const ProductsSection = () => {
	return (
		<div>
			<div className='product-grid'>
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
			<input
				type='submit'
				value='Ainda mais produtos aqui!'
				className='btn-product'
			></input>
		</div>
	);
};

export default ProductsSection;
