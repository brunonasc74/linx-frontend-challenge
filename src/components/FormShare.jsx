const FormShare = () => {
	return (
		<div className='form-share'>
			<div className='container'>
				<p>
					Quer que seus amigos também ganhem a lista personalizada deles?
					Preencha agora!
				</p>
				<form>
					<div className='form-control'>
						<label>Nome do seu amigo:</label>
						<input type='text'></input>
					</div>
					<div className='form-control'>
						<label>E-mail dele:</label>
						<input type='text'></input>
					</div>

					<input type='submit' value='Enviar agora' className='btn'></input>
				</form>
			</div>
		</div>
	);
};

export default FormShare;
