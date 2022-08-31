import React from 'react';
import Form from './Form';
import Section from './Section';
import Title from './Title';

const MainSection = () => {
	return (
		<main>
			<Section />;
			<Form />
			<Title text={'Sua seleção especial'} />
		</main>
	);
};

export default MainSection;
