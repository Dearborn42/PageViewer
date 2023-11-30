import './App.css';
import PageViewCounter from './Components/PageViewCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This page has been viewed by you</p>
        <PageViewCounter />
        <p>times!!!</p>
      </header>
    </div>
  );
}

export default App;
