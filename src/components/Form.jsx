const Form = () => {
	return (
		<form className='section-form'>
			<div className='container'>
				<div className='form-control'>
					<label>Seu nome:</label>
					<input
						type='text'
						pattern='.{3,}'
						required
						title='Nome completo necessário'
					></input>
				</div>
				<div className='form-control'>
					<label>E-mail</label>
					<input type='email' required></input>
				</div>
				<div className='form-control'>
					<label>CPF:</label>
					<input
						type='text'
						pattern='\d*'
						minlength='11'
						required
						title='CPF inválido, digite apenas números'
					></input>
				</div>

				<div className='form-control form-control-check'>
					<div className='check'>
						<input type='radio' name='radio' id='radio1' required></input>
						<label htmlFor='radio1'>Masculino</label>
					</div>
					<div className='check'>
						<input type='radio' name='radio' id='radio2' required></input>
						<label htmlFor='radio2'>Feminino</label>
					</div>
				</div>

				<input type='submit' value='Enviar' className='btn'></input>
			</div>
		</form>
	);
};

export default Form;
