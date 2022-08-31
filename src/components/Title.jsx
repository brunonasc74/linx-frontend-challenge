const Title = ({ text }) => {
	return <h2 className='title'>{text}</h2>;
};

Title.defaultProps = { text: 'Title' };

export default Title;
