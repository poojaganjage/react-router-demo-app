import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import Navbar from "./components/Header/Navbar";
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import User from './components/User/User';
import Error from './components/Error/Error';
import {useTheme} from './Context';
import './App.css';

function App() {
  const {theme, setTheme} = useTheme();
  let url = window.location.pathname;
  console.log(url);
  let path = '/*';
  console.log(path);

  return (
    <div className={`app ${theme}`}>
      <div>
        <a href='#' id='btnTheme' className={`float-start theme-btn-${theme} `} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <FontAwesomeIcon icon={faMoon} />
        </a>
      </div>
      <BrowserRouter>
        {(() => {
          if(url != path) {
            console.log("url");
            return <Navbar />
          } else if(path) {
            console.log("path");
            return null;
          }
        })()}
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/users/:id' element={<User />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
