import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Section from './components/Section';
import Title from './components/Title';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<Section />;
				<Form />
				<Title text={'Sua seleção especial'} />
				<Title text={'Compartilhe a novidade'} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
