import { StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Navbar from './components/Navbar';
import Trip from "./components/Trip";
import Slider from './components/Slider';
import Footer from './components/footer';
import './App.css';
import Cards from './components/Cards';




createRoot(document.getElementById('root')).render(
  <>

    <Navbar/>
    <Slider/>
    <Trip/>
    <Cards/>
    <Footer/>
    <body className='bg-gray-800' >
      
    </body>
  </>
);


const App = () => {
  // const [count, setCount] = useState(0)

  
}

export default App;
