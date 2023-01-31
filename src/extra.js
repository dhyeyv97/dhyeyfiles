import './App.css';
import Navbar from './Components/Navbar'
import  About  from './Components/About';
import TextForm from './Components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Navbar title= "TextApp" about="About"/>
    <Routes>
    <Route exact path="/about" element={<About />}>
      </Route>
      <Route exact path="/" element={<TextForm heading="Enter text to analyze"/>}>
      </Route>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;