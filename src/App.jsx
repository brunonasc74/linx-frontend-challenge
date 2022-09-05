import Header from './components/Header';
import Form from './components/Form';
import Section from './components/Section';
import FormShare from './components/FormShare';
import Footer from './components/Footer';
import ProductsSection from './components/ProductsSection';

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<Section />
				<Form />
				<ProductsSection />
				<FormShare />
			</main>
			<Footer />
		</div>
	);
}

export default App;
