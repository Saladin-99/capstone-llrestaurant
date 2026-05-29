import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Nav, Main, Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Main />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
