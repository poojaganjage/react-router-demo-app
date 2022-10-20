import {BrowserRouter, Routes, Route, matchPath} from 'react-router-dom';
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
  var path1 = '';
  var path2 = '';
  var path3 = '';
  var path4 = '';
  if(url == '/') {
    var path1 = matchPath('/', url);
    console.log(path1.pathname);
  } else if(url == '/about') {
    var path2 = matchPath('/about', url);
    console.log(path2.pathname);
  } else if(url == '/users') {
    var path3 = matchPath('/users', url);
    console.log(path3.pathname);
  } else if(url == '/contact') {
    var path4 = matchPath('/contact', url);
    console.log(path4.pathname);
  }
  console.log(path1.pathname);
  console.log(path2.pathname);
  console.log(path3.pathname);
  console.log(path4.pathname);

  return (
    <div className={`app ${theme}`}>
      <div>
        <a href='#' id='btnTheme' className={`float-start theme-btn-${theme} `} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <FontAwesomeIcon icon={faMoon} />
        </a>
      </div>
      <BrowserRouter>
        {(() => {
          if((url === path1.pathname) || (url === path2.pathname) || (url === path3.pathname) || (url === path4.pathname)) {
            console.log("url");
            return <Navbar />
          } else {
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
