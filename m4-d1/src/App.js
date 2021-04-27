import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import './App.css';
import Footer from './components/MyFooter';
import Jumbotron from './components/WelcomeNote';
import Release from './components/Release';

function App() {
	return (
		<>
			<MyNav />
			<Jumbotron />
			<Release />
			<Footer />
		</>
	);
}

export default App;
