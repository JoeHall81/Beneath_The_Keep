import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import RouteComponent from './components/RouteComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <RouteComponent />
      <Footer />
    </div>
  );
}

export default App;
