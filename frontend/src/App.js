import './App.scss';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
