import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import ContactInfo from "./pages/contactInfo.jsx";
import TodoList from "./pages/TodoList.jsx";
import SignUp from "./pages/signUp.jsx";
import Login from "./pages/Login.jsx";
function App() {
  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutThisProject" element={<About />} />
        <Route path="/ContactInfo" element={<ContactInfo/>} />
        <Route path="/to-do" element={<TodoList/>} />
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>}/>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;