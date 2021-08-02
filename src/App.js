import './App.css';
import Navigation from './Components/Navigation';
import FooterMenu from './Components/FooterMenu';
import MainContent from './Components/MainContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
      </header>
      <div className="App-main__content">
        <MainContent/>
      </div>
      <footer className="App-footer">
        <FooterMenu/>
      </footer>
    </div>
  );
}

export default App;
