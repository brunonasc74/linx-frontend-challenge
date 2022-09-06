import reactLogo from '../assets/react.svg';
const Product = ({
	productImg,
	productName,
	productDesc,
	oldPrice,
	price,
	count,
	value
}) => {
	return (
		<div className='container'>
			<div className='product'>
				<div className='img-div'>
					<img src={productImg} alt='Imagem do produto' />
				</div>
				<div className='price-div'>
					<h4>{productName}</h4>
					<p className='d-pricetag'>{productDesc}</p>
					<p className='s-pricetag'>De: R${oldPrice}</p>
					<p className='b-pricetag'>Por: R${price}</p>
					<p className='s-pricetag'>
						ou {count}x de R${value}
					</p>
					<input type='button' value='Comprar' />
				</div>
			</div>
		</div>
	);
};

Product.defaultProps = {
	productImg: reactLogo,
	productName: 'Nome do produto',
	productDesc:
		'Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.',
	oldPrice: '23,99',
	price: '19,99',
	count: '2',
	value: '9,99'
};

export default Product;
