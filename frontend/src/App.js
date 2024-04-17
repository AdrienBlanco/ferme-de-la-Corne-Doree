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

				<News
					sectionClass="news"
					newsTitle={['Actualités', 'Actualités', 'Actualités']}
					newsDate={['01/01/2021', '02/01/2021', '03/01/2021']}
					newsContent={[
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dignissimos culpa quisquam corrupti voluptatibus aut tempore recusandae quas beatae sequi iure, odit officiis facere saepe ipsam ratione ut voluptas soluta. Exercitationem aspernatur aliquid distinctio sunt officiis architecto, voluptatum fugiat eius pariatur saepe soluta dolore asperiores fugit veniam cupiditate rerum culpa numquam inventore harum adipisci, facere minima quam. Quos, excepturi mollitia. Quod, consequatur natus nemo veniam explicabo quae dolorum cum ab autem ea ad quidem fugit! Aliquam neque tempore voluptates similique accusamus corrupti, ut voluptatibus officia quod expedita. Consequatur, quia sint?',
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos culpa quisquam corrupti voluptatibus aut tempore recusandae quas beatae sequi iure, odit officiis facere saepe ipsam ratione ut voluptas soluta.',
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dignissimos culpa quisquam corrupti voluptatibus aut tempore recusandae quas beatae sequi iure, odit officiis facere saepe ipsam ratione ut voluptas soluta. Exercitationem aspernatur aliquid distinctio sunt officiis architecto, voluptatum fugiat eius pariatur saepe soluta dolore asperiores fugit veniam cupiditate rerum culpa numquam inventore harum adipisci, facere minima quam. Quos, excepturi mollitia. Quod, consequatur natus nemo veniam explicabo quae dolorum cum ab autem ea ad quidem fugit! Aliquam neque tempore voluptates similique accusamus corrupti, ut voluptatibus officia quod expedita. Consequatur, quia sint?',
					]}
				/>
				<ContactSection />
			</main>
			<Footer />
		</div>
	);
}

export default App;
