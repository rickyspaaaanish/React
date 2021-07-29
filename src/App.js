import './App.css';
import Navigation from './Components/Navigation';
import FooterMenu from './Components/FooterMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
      </header>
      <footer className="App-footer">
        <FooterMenu/>
      </footer>
    </div>
  );
}

export default App;
