import './App.css';
import About from './Components/About/About';
import Home from  './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Menu from './Components/Menu/Menu.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Home /><About /></>,
  },
  {
    path:"/menu",
    element:<><Menu /></>
  }
]);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <RouterProvider router={router}/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
