import './App.scss';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
