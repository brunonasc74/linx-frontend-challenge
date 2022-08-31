import reactLogo from '../assets/react.svg';
const Product = ({ productImg, productName }) => {
	return (
		<div>
			<div className='img-div'>
				<img src={productImg} alt='' />
			</div>
			<div className='price-div'>
				<h4>{productName}</h4>
				<p>De: R$23,99</p>
				<p>Por: R$19,99</p>
				<p>ou 2x de R$9,99</p>
				<input type='button' value='Comprar' />
			</div>
		</div>
	);
};

Product.defaultProps = {
	productImg: reactLogo,
	productName: 'Nome do produto'
};

export default Product;
