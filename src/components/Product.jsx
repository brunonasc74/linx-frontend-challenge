import reactLogo from '../assets/react.svg';
const Product = ({ productImg, productName }) => {
	return (
		<div className='container'>
			<div className='product'>
				<div className='img-div'>
					<img src={productImg} alt='Imagem do produto' />
				</div>
				<div className='price-div'>
					<h4>{productName}</h4>
					<p className='d-pricetag'>
						Descrição do produto um pouco maior, com duas linhas ou três que
						explica melhor do que se trata.
					</p>
					<p className='s-pricetag'>De: R$23,99</p>
					<p className='b-pricetag'>Por: R$19,99</p>
					<p className='s-pricetag'>ou 2x de R$9,99</p>
					<input type='button' value='Comprar' />
				</div>
			</div>
		</div>
	);
};

Product.defaultProps = {
	productImg: reactLogo,
	productName: 'Nome do produto'
};

export default Product;
