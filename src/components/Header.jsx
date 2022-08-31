const Header = () => {
	return (
		<header>
			<div className='container'>
				<section>
					<div className='box-one'>
						<h3>uma selecão de produtos</h3>
						<h1>especial para você</h1>
						<p>
							Todos os produtos desta lista foram selecionados a partir da sua
							navegação. Aproveite!
						</p>
					</div>
				</section>
			</div>
			<div className='box-two'>
				<div className='box'>Conheça a Linx</div>
				<div className='box'>Ajude o algorítimo</div>
				<div className='box'>Seus produtos</div>
				<div className='box'>Compartilhe</div>
			</div>
		</header>
	);
};

export default Header;
