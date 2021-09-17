import './App.css';
import Header from './components/HeaderComponent';
import Game from './components/GameComponent'
import Footer from './components/FooterComponent';
import WelcomeComponent from './components/WelcomeComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeComponent />
      {/* <Game /> */}
      <Footer />
    </div>
  );
}

export default App;
