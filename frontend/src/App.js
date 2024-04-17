import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './layout/Header/Header';
import ContactSection from './components/ContactSection/ContactSection';
import News from './components/News/News';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';
import Chevrerie from './pages/Chevrerie/Chevrerie';
import CentreEquestre from './pages/CentreEquestre/CentreEquestre';
import Error from './pages/Error/Error';

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chevrerie" element={<Chevrerie />} />
					<Route path="/centre-equestre" element={<CentreEquestre />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<News />
				<ContactSection />
			</main>
			<Footer />
		</div>
	);
}

export default App;
