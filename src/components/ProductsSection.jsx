import Product from './Product';
import Title from './Title';

const ProductsSection = () => {
	return (
		<div>
			<Title text={'Sua seleção especial'} />
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
